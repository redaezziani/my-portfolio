'use client';
import { Button } from '../button';
import { jsPDF } from 'jspdf';
import fs from 'fs';
import React from 'react';
const SaveButton = () => {
    const saveResume =()=>{
        const doc = new jsPDF();
        const resumeData = {
            name: 'Reda Ezziani',
            experience: 'Software Engineer',
            date: new Date().toLocaleDateString(),
            stack : ['React', 'Node', 'Express', 'Postgres', 'MySQL', 'Lambda', 'DynamoDB', 'S3', 'CloudFront'],
            education: 'Bachelor of Science in Computer Science',
            projects: [
                {
                    title: 'Project 1',
                    description: 'Description 1',
                    stack: ['React', 'Node', 'Express', 'Postgres'],
                },
                {
                    title: 'Project 2',
                    description: 'Description 2',
                    stack: ['React', 'Node', 'Express', 'Postgres'],
                },
                {
                    title: 'Project 3',
                    description: 'Description 3',
                    stack: ['React', 'Node', 'Express', 'Postgres'],
                },
            ],
            certifications: [
                {
                    title: 'Certification 1',
                    date: 'Date 1',
                },
                {
                    title: 'Certification 2',
                    date: 'Date 2',
                },
                {
                    title: 'Certification 3',
                    date: 'Date 3',
                },
            ],
            skills: [
                {
                    title: 'Skill 1',
                    level: 'Level 1',
                },
                {
                    title: 'Skill 2',
                    level: 'Level 2',
                },
                {
                    title: 'Skill 3',
                    level: 'Level 3',
                },
            ],
            languages: [
                {
                    title: 'Language 1',
                    level: 'Level 1',
                },
                {
                    title: 'Language 2',
                    level: 'Level 2',
                },
                {
                    title: 'Language 3',
                    level: 'Level 3',
                },
            ],
            hobbies: [
                {
                    title: 'Hobby 1',
                },
                {
                    title: 'Hobby 2',
                },
                {
                    title: 'Hobby 3',
                },
            ],

        };

        doc.text(`Resume\n\nName: ${resumeData.name}\nExperience: ${resumeData.experience}\nDate: ${resumeData.date}\n\n`, 10, 10);
        doc.text('Stack:', 10, 30);
        doc.text(resumeData.stack.join(', '), 10, 40);
        doc.text('Education:', 10, 60);
        doc.text(resumeData.education, 10, 70);
        doc.text('Projects:', 10, 90);
        resumeData.projects.forEach((project, index) => {
            doc.text(`${index + 1}. ${project.title}\nDescription: ${project.description}\nStack: ${project.stack.join(', ')}\n`, 10, 100 + index * 50);
        });
        doc.text('Certifications:', 10, 200);
        resumeData.certifications.forEach((certification, index) => {
            doc.text(`${index + 1}. ${certification.title}\nDate: ${certification.date}\n`, 10, 210 + index * 20);
        });
        doc.text('Skills:', 10, 250);
        resumeData.skills.forEach((skill, index) => {
            doc.text(`${index + 1}. ${skill.title}\nLevel: ${skill.level}\n`, 10, 260 + index * 20);
        });
        doc.text('Languages:', 10, 300);
        resumeData.languages.forEach((language, index) => {
            doc.text(`${index + 1}. ${language.title}\nLevel: ${language.level}\n`, 10, 310 + index * 20);
        });
        doc.text('Hobbies:', 10, 350);
        resumeData.hobbies.forEach((hobby, index) => {
            doc.text(`${index + 1}. ${hobby.title}\n`, 10, 360 + index * 20);
        });
        doc.save('resume.pdf');
    }
  return (
    <Button
      variant={'outline'}
      className="mb-20 flex items-center justify-center gap-1 py-3 font-medium"
      onClick={saveResume}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill={'none'}
      >
        <path
          d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      save resume
    </Button>
  );
};

export default SaveButton;
