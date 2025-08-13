/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abdessamad Chahbi - Portfolio",
  description:
    "Master's student in Data Science and Intelligent Systems, passionate about Data Science, Machine Learning, Deep Learning, Web Development, and Artificial Intelligence. Motivated by creating innovative solutions and optimizing intelligent systems.",
  og: {
    title: "Abdessamad Chahbi Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/abdessamad-chahbi/",
  },
};

//Home Page
const greeting = {
  title: "Abdessamad Chahbi",
  logo_name: "Abdessamad Chahbi",
  nickname: "Data Scientist and Software Engineer",
  subTitle:
    // "A passionate Master's student in Data Science and Intelligent Systems, driven by curiosity and innovation. I love solving real-world problems using AI, Machine Learning, Deep Learning, and Full Stack Web Development, and building scalable, intelligent solutions that make an impact.",
    "A passionate and rigorous AI and Software Engineer, recently graduated with a Master’s degree in Data Science and Intelligent Systems from the Faculty of Sciences and Techniques of Fez (FST Fès). Detail-oriented and motivated, with strong skills in Python, Java, Spring Boot, and React, as well as hands-on experience in Machine Learning, Deep Learning, and Full Stack Web Development. Eager to contribute to innovative projects in AI, Data Science, or Software Engineering, and to collaborate with dynamic teams to ensure the success of projects.",
  resumeLink:
    "https://drive.google.com/file/d/1fTaAO9KkZwPtaxPMnTqQnujGBa01s8n7/view?usp=sharing", // My Resume
  // portfolio_repository: "https://github.com/abdessamad-chahbi/myPortfolio",
  portfolio_repository: "https://github.com/abdessamad-chahbi/",
  githubProfile: "https://github.com/abdessamad-chahbi",
  resume_link:
    "https://drive.google.com/file/d/1fTaAO9KkZwPtaxPMnTqQnujGBa01s8n7/view?usp=sharing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/abdessamad-chahbi/",
  // linkedin: "https://www.linkedin.com/in/abdessamad-chahbi/",
  // gmail: "abdessamad.chahbi.2@gmail.com",
  // gitlab: "https://gitlab.com/..../",
  // facebook: "https://www.facebook.com/..../",
  // twitter: "https://twitter.com/...../",
  // instagram: "https://www.instagram.com/..../"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdessamad-chahbi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abdessamad.chahbi.2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Github",
    link: "https://github.com/abdessamad-chahbi/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/abdessamad-chahbi/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abdessamad-chahbi/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abdessamad-chahbi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/abdessamad-chahbi/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI Engineer",
      fileName: "DataScienceImg", // src/containers/skills/DataScienceImg.js
      skills: [
        "⚡ Designing and developing machine learning and deep learning models for automated log analysis to detect anomalies and suspicious behaviors in complex and heterogeneous IT environments.",
        "⚡ Building end-to-end automated log analysis pipelines: from raw data parsing to unsupervised anomaly detection without labeled data.",
        "⚡ Skilled in generating datasets by simulating both normal and malicious activities (SQL Injection, XSS, Brute Force, etc.) on web platforms (Spring Boot, React, Laravel).",
        "⚡ Hands-on experience with Computer Vision and Audio Processing: Multimodal scene classification with image (VGG, ResNet, Inception, MobileNetV2) and audio (MFCC, LSTM) features.",
        "⚡ Building and optimizing speech-based models using MFCC and GMM for automatic language and speaker recognition.",
        "⚡ Strong background in supervised (SVM, KNN, Decision Tree, Random Forest) and unsupervised (K-Means, DBSCAN, GMM, HMM) learning.",
        "⚡ Experience in ensemble learning techniques (Bagging, Boosting, Stacking) to improve model performance.",
        "⚡ Strong skills in feature engineering, time series analysis, and transfer learning with CNNs, RNNs, LSTM, and Attention Mechanisms for deep learning tasks.",
        "⚡ Expertise in training models with real-world datasets and evaluating them.",
        "⚡ Data visualization and exploratory data analysis (EDA) using Matplotlib, Seaborn, and advanced Python libraries.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Artificial Intelligence",
          imageSrc: "ai_logo.png", // Ajoutez cette image dans le répertoire public/skills/ai_logo.png
          style: { backgroundColor: "white", color: "#013243" },
        },
        {
          skillName: "Machine Learning",
          imageSrc: "machine_learning_logo.png",
        },
        {
          skillName: "Deep Learning",
          // imageSrc: "deeplearning_ai_logo.png",
          imageSrc: "deeplearning_ai_logo2.jpeg",
        },
        {
          skillName: "Git & GitHub",
          fontAwesomeClassname: "logos-github-icon",
          style: { backgroundColor: "transparent", color: "#000" },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "vscode-icons:file-type-vscode",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { backgroundColor: "transparent", color: "#F7931E" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { backgroundColor: "transparent", color: "#5C3EE8" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { backgroundColor: "transparent", color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { backgroundColor: "transparent", color: "#013243" },
        },
        {
          skillName: "Matplotlib",
          imageSrc: "matplotlib_logo.png",
          style: { backgroundColor: "transparent" },
        },
        // {
        //   skillName: "Seaborn",
        //   imageSrc: "seaborn_logo.png",
        //   style: { backgroundColor: "white", color: "#013243" }
        // },
        {
          skillName: "PyQt5",
          fontAwesomeClassname: "simple-icons:qt",
          style: { backgroundColor: "transparent", color: "#41CD52" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { backgroundColor: "transparent", color: "#F37626" },
        },
        {
          skillName: "VGG",
          imageSrc: "vgg_logo.png",
          style: { backgroundColor: "transparent" },
        },
        { skillName: "ResNet", imageSrc: "resnet_logo.png" },
        // { skillName: "Inception", imageSrc: "inception_logo.png" },
        { skillName: "MobileNetV2", imageSrc: "mobilenet_logo.jpeg" },
        // { skillName: "MFCC", imageSrc: "mfcc_logo.jpeg" },
        { skillName: "GMM", imageSrc: "gmm_logo.jpeg" },
        // { skillName: "HMM", imageSrc: "hmm_logo.png" },
        // { skillName: "CNN", imageSrc: "cnn_logo.jpeg" },
        { skillName: "RNN", imageSrc: "rnn_logo.png" },
        { skillName: "LSTM", imageSrc: "lstm_logo.png" },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building, developing, and deploying secure full-stack web applications with Java backend frameworks (Spring Boot, Jakarta EE) and modern frontend libraries (React.js, JSP, Thymeleaf).",
        "⚡ Designing and implementing relational and non-relational databases, with experience in MySQL, MongoDB, and data migration (ETL).",
        "⚡ Modeling, specifying, and implementing project requirements and system architecture (MVC, three-tier).",
        "⚡ Developing RESTful APIs with MVC architecture for structured backend logic and data communication.",
        "⚡ Developing dynamic and responsive UIs using HTML5, CSS3, PHP, Bootstrap, and JavaScript frameworks (jQuery, AJAX).",
        "⚡ Experienced in version control, collaborative development, and project management with Git & GitHub.",
        "⚡ Using Postman for testing APIs and managing backend routes.",
        "⚡ Web app deployment and configuration with Apache Tomcat.",
      ],
      softwareSkills: [
        // Frontend
        // { skillName: "React JS", fontAwesomeClassname: "logos-react", style: { backgroundColor: "transparent" } },
        {
          skillName: "React JS & Hooks",
          fontAwesomeClassname: "simple-icons:react",
          style: { backgroundColor: "transparent", color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: { backgroundColor: "transparent", color: "#F7DF1E" },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: { color: "#0769AD" },
        },
        // { skillName: "AJAX", imageSrc: "ajax_logo.png" },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
        {
          skillName: "Thymeleaf",
          fontAwesomeClassname: "simple-icons:thymeleaf",
          style: { backgroundColor: "white", color: "#005F0F" },
        },
        // { skillName: "JSP", fontAwesomeClassname: "simple-icons:java", style: { backgroundColor: "white", color: "#007396" } },
        // Backend
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos-php",
          style: { backgroundColor: "transparent", color: "#777BB4" },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos-laravel",
          style: { backgroundColor: "transparent", color: "#FF2D20" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { backgroundColor: "transparent", color: "#E76F00" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { backgroundColor: "transparent", color: "#6DB33F" },
        },
        {
          skillName: "Spring Data",
          fontAwesomeClassname: "simple-icons:spring",
          style: { backgroundColor: "transparent", color: "#6DB33F" },
        },
        {
          skillName: "Spring Security",
          fontAwesomeClassname: "simple-icons:springsecurity",
          style: { backgroundColor: "transparent", color: "#6DB33F" },
        },
        // { skillName: "Jakarta EE", fontAwesomeClassname: "simple-icons:jakartaee", style: { backgroundColor: "white", color: "#E76F00" } },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: { backgroundColor: "transparent", color: "#C71A36" },
        },
        // { skillName: "Maven", imageSrc: "maven_logo.png", style: { backgroundColor: "transparent" } },
        // { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { backgroundColor: "transparent", color: "#F05032" } },
        // { skillName: "GitHub", fontAwesomeClassname: "simple-icons:github", style: { backgroundColor: "transparent", color: "#000" } },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { backgroundColor: "transparent", color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { backgroundColor: "transparent", color: "#47A248" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { backgroundColor: "transparent", color: "#FF6C37" },
        },
        {
          skillName: "Tomcat",
          fontAwesomeClassname: "simple-icons:apachetomcat",
          style: { backgroundColor: "white", color: "#F8DC75" },
        },
        {
          skillName: "XAMPP",
          fontAwesomeClassname: "simple-icons:xampp",
          style: { backgroundColor: "transparent", color: "#FB7A24" },
        },
      ],
    },
    {
      // title: "BI, Big Data & Cloud Computing",
      title: "BI, Big Data & Cloud Computing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing and implementing end-to-end Business Intelligence (BI) pipelines using SQL Server, SSIS, SSAS, SSRS, and MDX for data analysis and reporting.",
        "⚡ Building and managing ETL pipelines (Extract, Transform, Load) to construct data warehouses and automate data flows.",
        "⚡ Creating OLAP cubes and performing advanced queries using MDX to analyze multi-dimensional data.",
        "⚡ Strong background in Big Data technologies, including Hadoop, HDFS, MapReduce, and distributed data processing.",
        "⚡ Experience with cloud computing, virtualization, and containerization tools such as Docker, Kubernetes, VirtualBox, VMware Workstation, and ESXi.",
      ],
      softwareSkills: [
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: { backgroundColor: "transparent", color: "#CC2927" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { backgroundColor: "transparent", color: "#F2C811" },
        },
        // { skillName: "Tableau", fontAwesomeClassname: "simple-icons:tableau", style: { backgroundColor: "transparent", color: "#E97627" } },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: { backgroundColor: "transparent", color: "#66CCFF" },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: { backgroundColor: "transparent", color: "#E25A1C" },
        },
        {
          skillName: "Apache Hive",
          fontAwesomeClassname: "simple-icons:apachehive",
          style: { backgroundColor: "transparent", color: "#FDEE21" },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { backgroundColor: "transparent", color: "#231F20" },
        },
        // { skillName: "Elasticsearch", fontAwesomeClassname: "simple-icons:elasticsearch", style: { backgroundColor: "transparent", color: "#005571" } },
        {
          skillName: "Cloud Computing",
          fontAwesomeClassname: "fa-cloud",
          style: { backgroundColor: "transparent", color: "#00AEEF" },
        },
        // { skillName: "Cloud Computing", imageSrc: "cloudcomputing_logo.png"},
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { backgroundColor: "transparent", color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { backgroundColor: "transparent", color: "#0089D6" },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { backgroundColor: "transparent", color: "#4285F4" },
        },
        // { skillName: "IBM Cloud", fontAwesomeClassname: "simple-icons:ibmcloud", style: { backgroundColor: "transparent", color: "#1261FE" } },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "VirtualBox",
          fontAwesomeClassname: "simple-icons:virtualbox",
          style: { backgroundColor: "transparent", color: "#183A61" },
        },
        {
          skillName: "VMware Workstation & ESXi",
          fontAwesomeClassname: "simple-icons:vmware",
          style: { backgroundColor: "transparent", color: "#607078" },
        },
        // { skillName: "VMware ESXi", imageSrc: "esxi_logo.png" },
        // { skillName: "Jenkins", fontAwesomeClassname: "simple-icons:jenkins", style: { color: "#D24939" } },
        // { skillName: "GitLab CI", fontAwesomeClassname: "simple-icons:gitlab", style: { color: "#FC6D26" } },
      ],
    },
    /*
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
*/
  ],
};

// Education Page

// // masterPortfolio/src/pages/education/EducationComponent.js
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Faculty of Sciences and Techniques of Fez (FST Fès)",
      subtitle:
        "Master’s Degree in Data Science and Intelligent Systems (SDSI)",
      logo_path: "fstfes_logo1.png", // masterPortfolio/src/assets/images/fstfes_logo.png
      alt_name: "FST Fez",
      duration: "Sep 2023 - Jul 2025",
      descriptions: [
        "⚡ Focused on Data Science, Artificial Intelligence, Machine Learning, Deep Learning, and Big Data technologies.",
        "⚡ Key modules include: Cloud Computing & Virtualization, Business Intelligence (BI), Hadoop Ecosystem, Data & Multimedia Mining, Web Semantics, Network Administration, and Entrepreneurship.",
        "⚡ Worked with advanced tools and frameworks such as TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy, Matplotlib, and SQL Server (SSIS/SSAS/SSRS).",
        "⚡ Hands-on experience with Machine Learning, Deep Learning (CNN, RNN, LSTM, GAN, YOLO), Transfer Learning (VGG, ResNet, Inception), and NLP technologies.",
        "⚡ Applied agile methodologies (Scrum), design patterns, and software architecture (Spring Boot, MVC, Jakarta EE) for real-world applications.",
      ],
      website_link: "https://fst-usmba.ac.ma/",
    },
    {
      title: "Faculty of Sciences and Techniques of Fez",
      subtitle: "Bachelor’s Degree in Computer Engineering",
      logo_path: "fstfes_logo2.png",
      alt_name: "FST Fès",
      duration: "Sep 2022 - Jul 2023",
      descriptions: [
        "⚡ Studied Object-Oriented Programming (OOP) with Java and C++, Web Development (HTML5, CSS, JavaScript, PHP), and Database Management (MySQL, PL/SQL).",
        "⚡ Designed and developed full-stack web and desktop applications using Java, PHP, and modern web technologies.",
        "⚡ Skills in UML modeling, Linux system administration (Ubuntu), and software design (MVC, design patterns).",
        "⚡ Studied network fundamentals, data structures, and algorithmic problem solving.",
      ],
      website_link: "https://fst-usmba.ac.ma/",
    },
    {
      title: "Faculty of Sciences and Techniques of Fez",
      subtitle:
        "University Diploma (DEUST) in Mathematics, Computer Science, and Physics (MIP)",
      logo_path: "fstfes_logo2.png",
      alt_name: "FST Fès",
      duration: "Sep 2020 - Jul 2022",
      descriptions: [
        "⚡ Acquired a strong foundation in mathematics, physics, and computer science through a multidisciplinary program.",
        "⚡ Studied core mathematics modules such as Analysis I–IV, Algebra I & II, Probability and Statistics, and Numerical Analysis.",
        "⚡ Completed advanced physics courses, including Mechanics (Point, Solid, Quantum), Thermodynamics, Electricity, Electromagnetism, and Chemistry.",
        "⚡ Developed solid programming skills in C language, algorithms, and data structures.",
        "⚡ Gained practical experience in database management systems (SGBD, MySQL) and problem-solving techniques.",
      ],
      website_link: "https://fst-usmba.ac.ma/",
    },
    {
      title: "Lycée Qualifiant Mixte – Missour",
      subtitle: "High School Diploma in Physical Sciences",
      // subtitle: "Baccalauréat in Physical Sciences",
      logo_path: "lyceemissour_logo.png",
      alt_name: "Lycée Qualifiant Mixte - Missour",
      duration: "Sep 2017 - Jul 2020",
      descriptions: [
        "⚡ Studied core subjects in physics, mathematics, and chemistry.",
        "⚡ Developed analytical thinking and problem-solving skills.",
        "🏆 Ranked 1st in the class with excellent academic performance.",
      ],
      // website_link: "https://...../",
      website_link: "https://highschool-missour.ma/",
      // website_link: "https://web.facebook.com/mixte.missour.7/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      subtitle: "- Oracle University",
      logo_path: "oracle_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0CE67E4CAC3AA00705BBE79EA00512E3CB587C8F518B23FB6181E4B80CE236C7",
      alt_name: "Oracle University",
      // color_code: "#B22222",
      color_code: "#D84315",
    },
    {
      title: "Artificial Intelligence",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/ddf22a6c6cc6590a1c7b3ade189826fe329529bb613e90c5917a1bc6ace638d6",
      alt_name: "Linkedin Learning",
      color_code: "#A9A9A9",
    },
    {
      title: "Artificial Intelligence",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png", // masterPortfolio/src/assets/images/openclassrooms_logo.jpeg
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/6555647403",
      alt_name: "OpenClassrooms",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/1571552359",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Shiyar Academy | Python Certificate",
      subtitle: "CSC-20240214-4358",
      logo_path: "shiyar_logo.png",
      certificate_link: "https://academy.codershiyar.com/validity-certificate/",
      alt_name: "Shiyar Academy",
      color_code: "#007396",
    },
    {
      title: "Spark, Hadoop, and Snowflake for Data Engineering",
      subtitle: "- Duke University (Coursera)",
      logo_path: "duke_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/PJCQXGX7EQGJ",
      alt_name: "Duke University",
      color_code: "#0A1F6B99",
    },
    {
      title:
        "Big Data, MapReduce, Hadoop, Spark, Data Science, S3, Cloud Computing",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/3989836840",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title:
        "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
      subtitle: "- Google Cloud Education (Coursera)",
      logo_path: "googlecloud_logo1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FSYUQ6F3SUMK",
      alt_name: "Google Cloud",
      color_code: "#1F70C199",
    },

    {
      title: "Discover Cloud with Amazon Web Services",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/6296111469",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Become a Git and GitHub Expert",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/5206978979",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Manage Your Code Project With Git and GitHub",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/2806057848",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },

    {
      title: "Connect and Protect: Networks and Network Security",
      subtitle: "- Google (Coursera)",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RNDK6A2SYPJ2",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      subtitle: "- IBM (Coursera)",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ZL4VA6SRZYN4",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Foundations of Cybersecurity",
      subtitle: "- Google (Coursera)",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7LL699P2222K",
      alt_name: "Google",
      color_code: "#4285F499",
    },

    {
      title: "Secure Your Web Application With Spring Security",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/9818984911",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Secure Your Data with Cryptography",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/6173773736",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Secure Your Web Applications with OWASP",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/7732222118",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Discover DevOps Methodology",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/7882699741",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Discover Cloud with Amazon Web Services",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/6296111469",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Learn Python Basics",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/8185826457",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },

    {
      title: "Shiyar Academy | Java Certificate",
      subtitle: "CSC-20230408-0650",
      logo_path: "shiyar_logo.png",
      certificate_link: "https://academy.codershiyar.com/validity-certificate/",
      alt_name: "Shiyar Academy",
      color_code: "#007396",
    },
    {
      title: "Shiyar Academy | PHP Certificate",
      subtitle: "CSC-20230408-3100",
      logo_path: "shiyar_logo.png",
      certificate_link: "https://academy.codershiyar.com/validity-certificate/",
      alt_name: "Shiyar Academy",
      color_code: "#777BB4",
    },
    {
      title: "Shiyar Academy | HTML Certificate",
      subtitle: "CSC-20230415-4728",
      logo_path: "shiyar_logo.png",
      certificate_link: "https://academy.codershiyar.com/validity-certificate/",
      alt_name: "Shiyar Academy",
      color_code: "#E34F26",
    },

    {
      title:
        "Create Web Applications Efficiently With the Spring Boot MVC Framework",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/7102201257",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Building Applications with Spring Boot",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/9552132714",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Create a Java Application with Spring Boot",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/9552132714",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },

    {
      title: "Implement Service-Oriented Architecture (SOA) in Java",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/2223190562",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Develop Websites with Java EE",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/9333745589",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Create a Complete React Application",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/1623000911",
      alt_name: "OpenClassrooms",
      color_code: "#61DAFB",
    },

    {
      title: "Adopt REST APIs for your Web Projects",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/9338345737",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Build a REST API with Symfony",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/6941118580",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Use Spring Data MongoDB for NoSQL Databases",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/5869691307",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },
    {
      title: "Use Spring Data for Databases",
      subtitle: "- OpenClassrooms",
      logo_path: "openclassrooms_logo.png",
      certificate_link:
        "https://openclassrooms.com/fr/course-certificates/7442828035",
      alt_name: "OpenClassrooms",
      color_code: "#2A73CC",
    },

    {
      title: "Shiyar Academy | SQL - MySQL Certificate",
      subtitle: "CSC-20230408-2854",
      logo_path: "shiyar_logo.png",
      certificate_link: "https://academy.codershiyar.com/validity-certificate/",
      alt_name: "Shiyar Academy",
      color_code: "#4479A1",
    },

    {
      title: "SoloLearn | Certificate in Advanced Java Programming",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-O7OLLDEU",
      alt_name: "SoloLearn",
      color_code: "#007396",
    },
    {
      title: "SoloLearn | Certificate in Advanced JavaScript Programming",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-5V4CPEL0",
      alt_name: "SoloLearn",
      color_code: "#F7DF1E",
    },
    {
      title: "SoloLearn | Certificate in Advanced SQL Programming",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-RE38JNA8",
      alt_name: "SoloLearn",
      color_code: "#4479A1",
    },

    {
      title: "SoloLearn | Certificate in Advanced C Programming",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-NNPY7OHQ",
      alt_name: "SoloLearn",
      color_code: "#1E7DAB",
    },
    {
      title: "SoloLearn | Certificate in Advanced C++ Programming",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-R1FPXMOD",
      alt_name: "SoloLearn",
      color_code: "#00599C",
    },

    {
      title: "SoloLearn | HTML Certificate",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-KB5SMIYS",
      alt_name: "SoloLearn",
      color_code: "#E34F26",
    },
    {
      title: "SoloLearn | CSS Certificate",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-KHVU8RQ2",
      alt_name: "SoloLearn",
      color_code: "#1572B6",
    },

    {
      title: "SoloLearn | Certificate in C - Intermediate Level",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-BAUW6VLZ",
      alt_name: "SoloLearn",
      color_code: "#1E7DAB",
    },
    {
      title: "SoloLearn | Certificate in C++ - Intermediate Level",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-DDXX5DWL",
      alt_name: "SoloLearn",
      color_code: "#00599C",
    },
    {
      title: "SoloLearn | Certificate in Java - Intermediate Level",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-5YMPRZSQ",
      alt_name: "SoloLearn",
      color_code: "#007396",
    },
    {
      title: "SoloLearn | Certificate in JavaScript - Intermediate Level",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-APQFXJIS",
      alt_name: "SoloLearn",
      color_code: "#F7DF1E",
    },
    {
      title: "SoloLearn | Certificate in SQL - Intermediate Level",
      subtitle: "- SoloLearn",
      logo_path: "sololearn_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-RDMQLWIL",
      alt_name: "SoloLearn",
      color_code: "#4479A1",
    },

    /*
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Academic Projects",
  description:
    "I have worked on a wide range of projects in Artificial Intelligence, Data Science, and Full Stack Development. I have gained experience in designing intelligent solutions, developing scalable web applications, and implementing machine learning and deep learning models. I am also passionate about cybersecurity, Big Data, and cloud-based systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer & Full Stack Developer (Freelance)",
          company: "Freelance / Self-Employed",
          company_url: "",
          logo_path: "freelance_logo.png",
          duration: "Jul 2025 - Present",
          location: "Fez, Morocco",
          description:
            "🚀 Providing freelance services and building end-to-end solutions in AI, machine learning, and full stack web development.\n" +
            "🌐 Built and deployed a portfolio website using React, Docker, and GitHub Pages to showcase technical projects and skills.\n",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI Engineer Intern",
          company: "GiantLink Technologies",
          company_url: "https://giantlink-technologies.com/",
          logo_path: "giantlink_logo.jpeg",
          duration: "Feb 2025 - Jul 2025 (6 months)",
          // "duration": "July 2019 - PRESENT",
          location: "Fès, Morocco (Hybrid)",
          // "description": "Final-year project focused on designing and developing an intelligent solution for automated log file analysis, aimed at detecting anomalies and suspicious behaviors in complex IT environments. Developed datasets through normal and malicious web activity simulations (Spring Boot, React, Laravel). Built a complete pipeline from raw log parsing to unsupervised anomaly detection (K-Means, Isolation Forest, One-Class SVM). Simulated attack scenarios (SQL Injection, XSS, Brute Force) and achieved high anomaly detection rates. Tech stack: Python, Scikit-learn, ThumbmarkJS, FingerPrintJS, OWASP ZAP, React, Laravel.",
          description:
            "📍 The main objective of this final-year project was to design and develop an intelligent solution for automated log file analysis, capable of efficiently leveraging log data to detect anomalies and suspicious behaviors in a complex and heterogeneous IT environment.\n" +
            "📍 Generated datasets by simulating normal and malicious activities on web platforms (Spring Boot, React, Laravel).\n" +
            "📍 Deployed an e-commerce web application built with Laravel to generate logs with a unique ID using ThumbmarkJS, accessible at: https://omnimart.ct.ws/.\n" +
            "📍 Developed a complete automated log analysis pipeline from raw data parsing to the identification of suspicious behaviors, without requiring labeled data.\n" +
            "📍 Anomaly detection using unsupervised learning: K-Means, Isolation Forest, and One-Class SVM.\n" +
            "📍 Simulated attack scenarios (SQL Injection, XSS, Brute Force, etc.) to test the robustness of the solution.\n" +
            "💡 Results: Solution capable of identifying complex anomalies with a high detection rate without labeled data.\n" +
            "🛠️ 🔄 Technologies: Python | Scikit-learn | K-Means | Isolation Forest | One-Class SVM | t-SNE | Pandas | NumPy | Regex | Matplotlib | Seaborn | Kneed | ThumbmarkJS | FingerPrintJS | Spring Boot | React | Laravel | OWASP ZAP | Cybersecurity | Cyberattack | SQL Injection | XSS | RCE | DoS/DDoS.\n\n" +
            "📌 In parallel, I completed advanced AI training at GiantLink, covering AI, Machine Learning, Deep Learning, image/video recognition, deep learning model optimization, and more.",
          color: "#0C6EFA",
        },
        {
          title: "Full Stack Developer Intern",
          company: "École Polytechnique des Génies - Competence Center",
          company_url: "https://epg.ma/",
          logo_path: "epg_logo.jpeg",
          duration: "Apr 2023 - Jun 2023 (3 months)",
          location: "Fez, Morocco (On-site)",
          // "description": "Developed a web application for student grade management using Spring Boot (MVC architecture), React JS, and MySQL. Implemented secure user task management, student registration, and grade reports. Designed and modeled project specifications, integrated RESTful APIs, and tested backend routes with Postman.",
          description:
            "📍 Development of a web application for managing student grades.\n" +
            "📍 Design and modeling of project specifications.\n" +
            "📍 Management of tasks performed by users.\n" +
            "📍 Management of student registrations and grade reports.\n" +
            "🛠️ 🔄 Technologies: Spring Boot | React JS | React Hooks | CSS | Bootstrap | HTML | MySQL | Postman | Tomcat | MVC Architecture | RESTful API.\n",
          color: "#4CAF50",
        },
      ],
    },
    {
      title: "Academic Projects",
      experiences: [
        {
          title: "Multimodal Scene Classification",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Oct 2024 - Dec 2024",
          location: "Fez, Morocco",
          description:
            "Developed a multimodal classification model combining image and audio data (MFCC + CNN/LSTM). Used pre-trained models (VGG19, ResNet50, InceptionV3) and ensemble techniques (Bagging, Voting). Achieved 99% accuracy using hybrid fusion and InceptionV3 features.",
          color: "#FF5722",
        },
        {
          title: "Automatic Language & Speaker Recognition",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Oct 2024 - Dec 2024",
          location: "Fez, Morocco",
          description:
            "Implemented a speaker and language recognition system using GMM and MFCC features. Designed models to classify 5 languages (Arabic, English, French, Japanese, Spanish) and identify speakers with high accuracy.",
          color: "#E91E63",
        },
        {
          title: "Object Recognition for Supermarkets",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Mar 2024 - May 2024",
          location: "Fez, Morocco",
          description:
            "Developed a desktop application for product recognition using Python (PyQt5). Integrated CNN models (MobileNetV2, VGG16) for image classification and linked the system with MySQL for product information management.",
          color: "#4CAF50",
        },
        {
          title: "Business Intelligence – Sales Analysis",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Apr 2024 - May 2024",
          location: "Fez, Morocco",
          description:
            "Built a BI solution using SQL Server, SSIS (ETL), SSAS (OLAP Cubes), and SSRS to analyze sales data from the Northwind database. Developed dashboards and MDX queries for advanced reporting.",
          color: "#607D8B",
        },
        {
          title: "Image Processing & Analysis",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Mar 2024 - May 2024",
          location: "Fez, Morocco",
          description:
            "Developed a GUI-based image processing tool using Python and OpenCV. Implemented histogram equalization, filtering (Gaussian, Median), edge detection (Sobel, Laplacian), and morphological operations.",
          color: "#9C27B0",
        },
        {
          title: "Web Application for Resource Management",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Feb 2024 - Apr 2024",
          location: "Fez, Morocco",
          description:
            "Led a team to develop a resource management system with Spring Boot and JSP. Managed supplier proposals, delivery workflows, and implemented authentication with Spring Security.",
          color: "#3F51B5",
        },
        {
          title: "Cardiovascular Disease Risk Prediction",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Mar 2024 - Apr 2024",
          location: "Fez, Morocco",
          description:
            "Predicted 10-year coronary heart disease (CHD) risk using logistic regression on the Framingham dataset. Applied data cleaning, exploratory analysis (EDA), and implemented a predictive model in Java integrated with Apache Hadoop.",
          color: "#795548",
        },
        {
          title: "Web Application for Project Management",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Nov 2023 - Jan 2024",
          location: "Fez, Morocco",
          description:
            "Developed a project management platform with Jakarta EE (JSP, JSTL) and MySQL. Implemented features for project creation, task management, and secure role-based access for Directors and Developers.",
          color: "#FF9800",
        },
        {
          title: "Web Application for Student Management",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Nov 2023 - Dec 2023",
          location: "Fez, Morocco",
          description:
            "Designed and developed a Spring Boot web application for managing student data with secure role-based access. Integrated Thymeleaf, Bootstrap, MongoDB, and REST APIs for CRUD operations.",
          color: "#2196F3",
        },
        {
          title: "Dynamic Website on Belgium",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Dec 2022 - Jan 2023",
          location: "Fez, Morocco",
          description:
            "Created a dynamic website with HTML, CSS, JavaScript, and PHP showcasing information about Belgium. Developed a newsletter system and database connectivity using MySQL and XAMPP.",
          color: "#009688",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Team Lead – Web Application Project",
          company: "Faculty of Sciences and Techniques of Fez",
          company_url: "https://fst-usmba.ac.ma/",
          logo_path: "fstfes_logo2.png",
          duration: "Feb 2024 - Apr 2024",
          location: "Fès, Morocco",
          description:
            "Led a 4-member team to develop a web platform for managing physical resources. Designed the system architecture using Spring Boot and JSP, implemented secure user roles (Admin, Department Head, Technician), and handled procurement workflows. Ensured code consistency via GitHub and managed pull/push operations collaboratively.",
          color: "#6D83F2",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my academic and personal projects that involve Data Science, AI, Machine Learning, Deep Learning, Web Development, and Cloud Computing. I enjoy building intelligent systems, end-to-end web applications, and deploying solutions using modern technologies. These projects reflect my hands-on skills and continuous learning mindset.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abdessamad_chahbi_profile.png", // src/assets/images/abdessamad_chahbi_profile.png
    description:
      "I am open to new opportunities, collaborations, and discussions related to Data Science, AI, Machine Learning, Deep Learning, Full Stack Development, and Cloud Computing. Feel free to contact me via email, LinkedIn, or social media. I’ll do my best to respond within 24 hours.",
  },
  blogSection: {
    title: "Blogs & Publications",
    subtitle:
      "I plan to share my experiences, technical projects, and insights on Data Science, AI, and Full Stack Development.",
    link: "https://blogs.abdessamad-chahbi.com/",
    // link: "https://www.linkedin.com/in/abdessamad-chahbi/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Avenue Al Karama, Fès, Fès-Meknès, Morocco 30050",
    streetAddress: "Avenue Al Karama",
    locality: "Fès",
    region: "Fès-Meknès",
    country: "Morocco",
    postalCode: "30050",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/utneJpxjBFUvVHCQ7",
  },
  phoneSection: {
    // title: "",
    // subtitle: "",
    title: "Phone",
    subtitle: "+212 7 08 77 04 00",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
