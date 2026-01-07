import jsPDF from "jspdf";
import { EducationList } from "@/data/education";
import { HardSkillList } from "@/data/hardSkills";
import { InterestList } from "@/data/interests";
import { SoftSkillList } from "@/data/softSkills";
import { SoftwareMotivationList } from "@/data/softwareMotivation";
import { WorkExperienceList } from "@/data/workExperience";
import { Experience } from "./experience";
import nextConfig from "../../next.config";
import { SkillCategory } from "./skillCategory";
import { SkillCategoryList } from "@/data/skillCategories";

export const generatePdf = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const columnGap = 10;
    const columnWidth = (pageWidth - columnGap * 3) / 2;
    let y = 20;

    const leftX = columnGap;
    const rightX = columnGap * 2 + columnWidth;

    const siteUrl = `${window.location.origin}${nextConfig.basePath}`;
    const defaultFontSize = 11;
    const titleFontSize = 13;

    const drawColumnTitle = (title: string, x: number, yPos: number) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(titleFontSize);
        doc.text(title, x, yPos);
        yPos += 4;
        doc.setDrawColor(150);
        doc.line(x, yPos, x + columnWidth, yPos);
        return yPos + 4;
    };

    const drawTitle = (title: string, yPos: number) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(titleFontSize);
        doc.text(title, leftX, yPos);
        yPos += 4;
        doc.setDrawColor(150);
        doc.line(leftX, yPos, pageWidth - leftX, yPos);
        return yPos + 4;
    };

    const drawExperience = (title: string, experienceList: Experience[], x: number, yStart: number) => {
        let y = drawColumnTitle(title, x, yStart);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(defaultFontSize);

        const sortedList = experienceList.toSorted(function(a, b){return b.startYear-a.startYear})
        sortedList.forEach((item) => {
            const duration = `${item.startYear}–${item.endYear || "Present"}`;
            doc.text(duration, x, y);
            doc.text(item.name, x + columnWidth, y, { align: "right" });
            y += 6;
        });

        return y;
    };

    const drawBulletedSection = (title: string, list: string[], x: number, yStart: number) => {
        let y = drawColumnTitle(title, x, yStart);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(defaultFontSize);

        list.forEach(item => {
            doc.text(`• ${item}`, x, y);
            y += 5;
        });

        return y;
    };

    const drawSkillCategories = (categories: SkillCategory[]) => {
        categories.forEach((category) => {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(defaultFontSize);
            const categoryLabel = `${category.name}: `;
            doc.text(categoryLabel, 10, y);

            const offset = 10 + doc.getTextWidth(categoryLabel);

            doc.setFont("helvetica", "normal");
            const skillText = category.skills.map((s) => s.name).join(", ");
            doc.text(skillText, offset, y);
            y += 6;
        });

        y += 4;
    };

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Wesley van der Burgt", pageWidth / 2, y, { align: "center" });

    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(defaultFontSize);
    doc.text("Mail: wesleyburgt@gmail.com", pageWidth / 2, y, { align: "center" });
    y += 6;
    doc.text("Date of birth: 2-10-2006", pageWidth / 2, y, { align: "center" });
    y += 6;
    doc.text("Location: Zeeland (NB), Netherlands", pageWidth / 2, y, { align: "center" });
    y += 6;
    doc.text(`Site: ${siteUrl}`, pageWidth / 2, y, { align: "center" });
    y += 12;

    const eduYEnd = drawExperience("Education", EducationList, leftX, y);
    const workYEnd = drawExperience("Work experience", WorkExperienceList, rightX, y);
    y = Math.max(eduYEnd, workYEnd) + 8;

    const softYEnd = drawBulletedSection("Soft Skills", SoftSkillList, leftX, y);
    const hardYEnd = drawBulletedSection("Hard Skills", HardSkillList, rightX, y);
    y = Math.max(softYEnd, hardYEnd) + 8;

    const softMotivationY = drawBulletedSection("Software Motivations", SoftwareMotivationList, leftX, y);
    const interestY = drawBulletedSection("Interests", InterestList, rightX, y);
    y = Math.max(softMotivationY, interestY) + 8;

    y = drawTitle("Software skills", y);
    drawSkillCategories(SkillCategoryList);

    const blob = doc.output("blob");
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "_blank");
};
