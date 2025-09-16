import {Router} from 'express';
import {body} from 'express-validator';
import * as projectController from '../controllers/project.controller.js';
import * as authMiddleware from  '../middleware/auth.middleware.js';

const router = Router();

router.post('/create',
    authMiddleware.authUser,
    body('name').isString().withMessage('Name is required'),
    projectController.createProject);

router.get('/all',authMiddleware.authUser,projectController.getAllProjects);

router.put('/add-user',authMiddleware.authUser,
    body('projectId').isString().withMessage('ProjectId is required'),
    body('users').isArray({min:1}).withMessage('users must be array of strings').bail().custom((users)=>users.every(user=>typeof user ==='string')).withMessage('Each user must be string'),
    projectController.addUserToProject);

router.get('/get-project/:projectId',
    authMiddleware.authUser,
    projectController.getProjectId);

router.put('/update-file-tree',
    body('projectId').isString().withMessage("Project id is required"),
    body('fileTree').isObject().withMessage('File tree is required'),
    projectController.updateFileTree
)
    

export default router;