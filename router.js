import Router from 'express'
import PostController from './PostController.js'
import mongoose, { mongo } from 'mongoose'

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router;
