import SOCIAL2 from '@salesforce/resourceUrl/SOCIAL2';

import Deepak from '@salesforce/resourceUrl/Deepak';


export const PROFILE_IMAGE = Deepak
export const SOCIAL_LINKS=[
{   
    type: "github",
    label: "github/Deepakjohn-08",
    link: "https://github.com/Deepak-john-08",
    //icon: SOCIAL2 + '/SOCIAL2/github.svg'
},
{
    type: "linkedin",
    label: "linkedin/Deepak V",
    link: "https://www.linkedin.com/in/deepakv08/",
    //icon: SOCIAL2 + '/SOCIAL2/linkedin.svg'
},
{
    type: "trailhead",
    label: "trailhead/Deepak V",
    link: "https://trailblazer.me/id/deepak0810",
    //icon: SOCIAL2 + '/SOCIAL2/trailhead.svg'
}
]
    

export const USER_DETAILS={
    NAME:'Deepak V',
    ROLE:'Fresher',
    EMAIL:'deepakjohndj12@gmail.com',
    PHONE:'763 925 9257'
}

export  const CAREER_OBJECTIVE={
    HEADING: "CAREER OBJECTIVE",
    DESCRIPTION: "To obtain a challenging position that fully utilizes my skills and provides me with suitable opportunities to grow my technical and communication skills which would help me as a fresher to grow while working towards the organizational goals."
}
export const PROJECTS_DATA={
    HEADING : "PROJECTS",
    PROJECTS:[
        {
            TOPIC : "1.Salesforce Admin",
            TITLE : "TITLE:Setting MFA",
            DESCRIPTION: "Multifactor Authentication was setup to the org using permission set",
            DESCRIPTION_POINTS:[],
        },
        {
            TOPIC:"2.Salesforce Developer",
            TITLE:"TITLE: Mine Locator",
            DESCRIPTION:"A Salesforce application built with multiple LWC components that enables the user to search for the  Mines that export Ores of different elements.",
            DESCRIPTION_POINTS:[]
        },
        {
            TOPIC:"3.Salesforce Developer",
            TITLE:"TITLE: Resume Builder",
            DESCRIPTION:"Built my resume and published it using LWC. ",
            DESCRIPTION_POINTS:[
                "Resume was build using LWC components.",
                "Designed for both mobile and desktop view"
            ]
        },
        {
            TOPIC:"4.Internship",
            TITLE:"TITLE: Online Admission Portal",
            DESCRIPTION:"A Full Stack Application that enables",
            DESCRIPTION_POINTS: [
                " the users to login,search courses and apply.",
                "the admins to login,add,delete and view courses and institutions."
            ]

        },
        {
            TOPIC:"5.Final Year",
            TITLE:"TITLE: BASELINE APPROACH TO AUTO IMPLANTATION -CRANIAL IMPLANT",
            DESCRIPTION:"A software that uses Machine Learning Algorithms to find the defective region in Skull and facilitate Auto-Implantation.",
            DESCRIPTION_POINTS:[]
        },
    ]
}
export const STRENGTHS_DATA={
    HEADING:"KEY STRENGTHS",
    STRENGTHS:[
        {
            //DESCRIPTION: //"1.Good Communication \n 2.Attention to detail; \n 3.Problem Solving",
            DESCRIPTION_POINTS:[
                "1.Good Communication\n",
                "2.Attention to detail\n",
                "3.Problem Solving"
            ]
        }
    ]
}
export const PROGRAMMING_DATA={
    HEADING:"PROGRAMMING LANGUAGES",
    PROGRAMS:[
        {
            DESCRIPTION:"JAVA",
            DESCRIPTION_POINTS:[
                "OOPS,STRINGS,ARRAYS,Basic Java Constructs"
            ]
        },
        {
            DESCRIPTION:"JAVASCRIPT",
            DESCRIPTION_POINTS:[
                "VARIABLES,OBJECTS,FUNCTIONS.",
            ]
        },
        {
            DESCRIPTION:"APEX",
            DESCRIPTION_POINTS:[
                "CLASSES,TRIGGERS."
            ]
        },
        
        
    ]
}

export const EDUCATION_DATA={
    //ICON: SOCIAL2 + '/SOCIAL2/education.svg',
    HEADING: "EDUCATION",
    LIST:[
        {
            NAME: "Bachelor of Computer science and Engineering",
            UNIVERSITY_NAME: "CSI College Of Engineering",
            DURATION: "2017-2021",
            PERCENTAGE: "76.10%",
        },
        {
            NAME: "HSC(12th)",
            UNIVERSITY_NAME: "Green Valley Mat. Hr. Sec. School.",
            DURATION: "2016-2017",
            PERCENTAGE:"69.66%",
        },
    ]
}

export const ACHIEVEMENTS_DATA={
    //ICON: SOCIAL2 + '/SOCIAL2/awards.svg',
    HEADING: "ACHIEVEMENTS",
    LIST:[
        {
            NAME:"SUPERBADGES",
            TITLE1:"1.APEX SPECIALIST",
            TITLE2:"2.LIGHTNING WEB COMPONENT SPECIALIST",
            
            /*DESCRIPTION_POINTS:
            [
                "1.APEX SPECIALIST",   
                "2.LIGHTNING WEB COMPONENT SPECIALIST",
            ]*/
        
        },
        
            
    ]
}

export const COURSES_DATA={
    //ICON:SOCIAL2 +  '/SOCIAL2/certification.svg',
    HEADING: "COURSES COMPLETED",
    LIST:[
        {
            NAME: "1.Completed Salesforce training at Besant Technologies,             Marathahali,Bangalore",
        }
    ]
}

export const SKILLS_DATA={
    HEADING:"SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING:"SALESFORCE DEVELOPER",
            SKILLS_LIST:[
                {NAME:"Flows,Pages,Apex Classes, Controllers, Apex Triggers,Lightning Web Components."},
                /*{NAME:"Pages,"}, 
                {NAME: "Apex Classes, Controllers,  Apex Triggers,"},
                {NAME:"Lightning Web Components."},*/
            ],
        },
        {
            HEADING:"SALESFORCE ADMIN",
            SKILLS_LIST:[
                {NAME:"CustomTabs, Custom Objects, Validation Rules,Reports and Dashboards, Profiles, Permission Sets,Page Layouts, Org-Wide Default, Sharing Rules, Migrating Data."},  
                /*{NAME:"Reports and Dashboards, Profiles, Permission Sets,"}, 
                {NAME:"Page Layouts,  Org-Wide Default, Sharing Rules."},
                {NAME:"Migrating Data." },*/
            ]
        }
    ]

}


