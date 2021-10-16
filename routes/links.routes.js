const { body, validationResult } = require('express-validator')
const { Router } = require('express')
const router = Router()

router.get(
  '/:code',
  body('code').isLength({ max: 6 }),
  async (req, res) => {
    const failHandler = () => {
      return res.status(400).json({
        message: 'Неверный код',
      })
    }

    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return failHandler()

      let code = req.params && req.params.code
      if (!code) return failHandler()

      code = +code
      if (isNaN(code)) return failHandler()

      const linkInfo = req.db.links.find((info) => info.code === code)
      if (!linkInfo) return failHandler()

      res.json(linkInfo)
    } catch (e) {
      console.error(`can't get link`, e)
    }
    }
)

router.post(
  '/add',
  body('link').isURL(),
  async (req, res) => {
    const failHandler = () => {
      return res.status(400).json({
        message: 'Некорректные данные',
      })
    }

    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return failHandler()

      const { link } = req.body
      if (!link) return failHandler()

      const code = Math.floor(Math.random() * 999999)
      const data = { code, link, date: Date.now() }
      req.db.links.push(data)

      res.json(data)
    } catch (e) {
      console.error(`can't add link`, e)
    }
  }
)

module.exports = router