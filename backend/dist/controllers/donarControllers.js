"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDonor = exports.updateDonor = exports.getDonorById = exports.getAllDonors = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Get all donors
const getAllDonors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donors = yield prisma.donar.findMany();
        res.json(donors);
    }
    catch (error) {
        res.status(500).json({ error: 'Could not fetch donors.' });
    }
});
exports.getAllDonors = getAllDonors;
// Get a specific donor by ID
const getDonorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const donor = yield prisma.donar.findUnique({ where: { id } });
        res.json(donor);
    }
    catch (error) {
        res.status(500).json({ error: 'Could not fetch donor.' });
    }
});
exports.getDonorById = getDonorById;
// Update donor details
const updateDonor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedDonor = yield prisma.donar.update({ where: { id }, data });
        res.json(updatedDonor);
    }
    catch (error) {
        res.status(500).json({ error: 'Could not update donor.' });
    }
});
exports.updateDonor = updateDonor;
// Delete donor
const deleteDonor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.donar.delete({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Could not delete donor.' });
    }
});
exports.deleteDonor = deleteDonor;
