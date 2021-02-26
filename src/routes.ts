import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendEmailController } from './controllers/SendEmailController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendEmailController = new SendEmailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);

router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

router.post("/sendMail", sendEmailController.execute);
router.get("/answer/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute)

export {router};