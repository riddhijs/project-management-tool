var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('here');
    try {
        const projects = yield prisma.project.findMany();
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ message: `Error adding project: ${err === null || err === void 0 ? void 0 : err.message}` });
    }
});
export const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, startDate, endDate } = req.body;
    try {
        const newProject = yield prisma.project.create({
            data: { name, description, startDate, endDate },
        });
        res.status(200).json(newProject);
    }
    catch (err) {
        res.status(500).json({ message: `Error adding project: ${err === null || err === void 0 ? void 0 : err.message}` });
    }
});
