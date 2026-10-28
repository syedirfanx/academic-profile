import jsPDF from 'jspdf';

export function generateCVPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 42;
  const marginTop = 42;
  const marginBottom = 42;
  const contentWidth = pageWidth - marginX * 2;
  const lineSpacing = 14.5;
  let y = marginTop;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(34);
    y += 14;
    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(title.toUpperCase(), marginX, y);
    y += 4;
    doc.setDrawColor(60, 60, 60);
    doc.setLineWidth(0.75);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 12;
  };

  const drawBullet = (text: string, boldPrefix?: string) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 30, 30);

    const bulletIndent = 12;
    const bulletSymbol = '• ';
    const textIndent = marginX + bulletIndent;
    const textWidth = contentWidth - bulletIndent;

    let fullText = text;
    if (boldPrefix) {
      fullText = boldPrefix + text;
    }

    const lines = doc.splitTextToSize(fullText, textWidth);
    checkPageBreak(lines.length * lineSpacing + 4);

    doc.text(bulletSymbol, marginX + 2, y);

    if (boldPrefix) {
      doc.setFont('times', 'bold');
      const prefixWidth = doc.getTextWidth(boldPrefix);
      doc.text(boldPrefix, textIndent, y);
      doc.setFont('times', 'normal');
      
      const restLines = doc.splitTextToSize(text, textWidth - prefixWidth);
      if (restLines.length > 0) {
        doc.text(restLines[0], textIndent + prefixWidth, y);
      }
      for (let i = 1; i < lines.length; i++) {
        y += lineSpacing;
        doc.text(lines[i], textIndent, y);
      }
    } else {
      for (let i = 0; i < lines.length; i++) {
        if (i > 0) y += lineSpacing;
        doc.text(lines[i], textIndent, y);
      }
    }
    y += lineSpacing;
  };

  // HEADER (Without Dhaka, Bangladesh and without Website)
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 15, 15);
  doc.text('SYED MD IRFANUL ALAM IRFAN', pageWidth / 2, y, { align: 'center' });
  y += 18;

  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);

  const contactLine = 'Email: syedirfaanx@gmail.com   |   Phone: +880 1336946358   |   LinkedIn: linkedin.com/in/syedirfanx   |   GitHub: github.com/syedirfanx';
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
  y += 8;

  // RESEARCH PROFILE
  drawSectionHeader('Research Profile');
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 30, 30);
  const profileSummary = "MSc Data Science graduate with research experience in feature selection, swarm intelligence and machine learning. My master's dissertation investigated Particle Swarm Optimization (PSO) and Dispersive Flies Optimization (DFO) for feature selection in high dimensional dataset. I have also contributed to peer-reviewed IEEE research on machine learning based rice leaf disease detection and developed projects involving predictive modelling, generative deep learning, network analytics and LLM-based applications. I am interested in doctoral research at the intersection of machine learning, optimization, data-centric AI, and intelligent systems.";
  const summaryLines = doc.splitTextToSize(profileSummary, contentWidth);
  checkPageBreak(summaryLines.length * lineSpacing + 6);
  for (const line of summaryLines) {
    doc.text(line, marginX, y);
    y += lineSpacing;
  }
  y += 3;

  const interestsText = "Machine Learning, Deep Learning, Generative AI and LLMs, Feature Selection, Optimization, Reinforcement Learning, Data Mining.";
  doc.setFont('times', 'bold');
  const interestsPrefix = "Research Interests: ";
  const pWidth = doc.getTextWidth(interestsPrefix);
  doc.text(interestsPrefix, marginX, y);
  doc.setFont('times', 'normal');
  const interestsLines = doc.splitTextToSize(interestsText, contentWidth - pWidth);
  doc.text(interestsLines[0], marginX + pWidth, y);
  for (let i = 1; i < interestsLines.length; i++) {
    y += lineSpacing;
    doc.text(interestsLines[i], marginX, y);
  }
  y += lineSpacing;

  // EDUCATION
  drawSectionHeader('Education');
  
  // MSc
  checkPageBreak(30);
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text('MSc Data Science', marginX, y);
  doc.setFont('times', 'normal');
  doc.text(', University of Greenwich, London', marginX + doc.getTextWidth('MSc Data Science'), y);
  doc.text('Jan 2022 – Apr 2023', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing + 2;

  // BSc
  checkPageBreak(20);
  doc.setFont('times', 'bold');
  doc.text('BSc Computer Science and Engineering', marginX, y);
  doc.setFont('times', 'normal');
  doc.text(', North South University, Dhaka', marginX + doc.getTextWidth('BSc Computer Science and Engineering'), y);
  doc.text('Jan 2015 – Apr 2020', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing + 2;

  // RESEARCH EXPERIENCE
  drawSectionHeader('Research Experience');

  // MSc Dissertation
  checkPageBreak(34);
  doc.setFont('times', 'bold');
  doc.text('MSc Dissertation – University of Greenwich', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('May 2022 – Jan 2023', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;

  doc.setFont('times', 'italic');
  doc.text("‘Feature Selection using Swarm Intelligence and Dispersive Flies Optimization’", marginX, y);
  doc.setFont('times', 'normal');
  doc.setTextColor(14, 116, 144);
  doc.text(' (github.com/syedirfanx/swarm-intelligence)', marginX + doc.getTextWidth("‘Feature Selection using Swarm Intelligence and Dispersive Flies Optimization’"), y);
  doc.setTextColor(30, 30, 30);
  y += lineSpacing;

  doc.setFont('times', 'bold');
  doc.text('Supervisor: ', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('Dr. Mohammed Majid Al-Rifaie', marginX + doc.getTextWidth('Supervisor: '), y);
  y += lineSpacing;

  drawBullet('Applied Particle Swarm Optimization and Dispersive Flies Optimization on high-dimensional dataset up to 2,400 features.');
  drawBullet('Reduced dimensionality by up to 86% while achieving up to a 1.98% improvement in classification accuracy.');
  drawBullet('Worked on the full pipeline under supervision, including data preparation and processing, implementation of both swarm intelligence techniques and evaluation of classifier performance.');
  y += 4;

  // Undergrad Research
  checkPageBreak(34);
  doc.setFont('times', 'bold');
  doc.text('Undergraduate Research Contribution – North South University', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('Apr 2019 – Dec 2019', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;

  doc.setFont('times', 'italic');
  doc.text("‘Rice Leaf Disease Detection using Machine Learning Techniques’", marginX, y);
  y += lineSpacing;

  doc.setFont('times', 'bold');
  doc.text('Supervisor: ', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('Dr. Sifat Momen', marginX + doc.getTextWidth('Supervisor: '), y);
  y += lineSpacing;

  drawBullet('Contributed as a co-author to a machine learning study on rice leaf disease detection by implementing data preprocessing and augmentation, conducting the literature review, and contributing to the technical report.');
  drawBullet('The resulting paper was published at IEEE STI 2019.');

  // PUBLICATION
  drawSectionHeader('Publication');
  checkPageBreak(34);
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  const pubText = 'Ahmed, K., Shahidi, T. R., Alam, S. M. I., and Momen, S. (2019). “Rice Leaf Disease Detection Using Machine Learning Techniques.” 2019 International Conference on Sustainable Technologies for Industry 4.0 (STI), IEEE, pp. 1-5.';
  const pubLines = doc.splitTextToSize(pubText, contentWidth);
  for (const line of pubLines) {
    doc.text(line, marginX, y);
    y += lineSpacing;
  }
  doc.setFont('times', 'italic');
  doc.setTextColor(80, 80, 80);
  doc.text('Third of four authors', marginX, y);
  doc.setTextColor(30, 30, 30);
  y += lineSpacing + 2;

  // SELECTED RESEARCH AND TECHNICAL PROJECTS
  drawSectionHeader('Selected Research and Technical Projects');
  drawBullet('Customer Revenue Forecasting (MSc coursework, COMP 1804 Applied Machine Learning): Benchmarked classification, regression, and clustering models on 1,000 customer records; Random Forest reached 93% accuracy and R² = 0.898. (github.com/syedirfanx/revenue-forecasting)');
  drawBullet('CelebA Face Generation using DCGAN (BSc coursework, CSE 465 Deep Learning): Implemented a custom Generator–Discriminator architecture in PyTorch and trained a DCGAN on 200,000+ CelebA images for 150 epochs to synthesize human face images. (github.com/syedirfanx/face-generation)');
  drawBullet('AI Network Intrusion Detection (Independent): Random Forest classifier trained on the NSL-KDD dataset, with feature importance analysis to identify key traffic indicators. (github.com/syedirfanx/ai-network-intrusion-detection)');
  drawBullet('AI Network Traffic Prediction and Resource Optimization (Independent): Applied Random Forest regression for network traffic forecasting (R² = 0.78), followed by rule-based resource allocation. (github.com/syedirfanx/ai-network-traffic-optimization)');

  // EXPERIENCE (Starts on new page)
  doc.addPage();
  y = marginTop;
  drawSectionHeader('Experience');

  // Independent
  checkPageBreak(28);
  doc.setFont('times', 'bold');
  doc.text('Independent Machine Learning & AI Projects', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('May 2023 – Present', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;
  drawBullet('Worked on applied AI/ML projects spanning generative AI, deep learning and network data analysis.');
  drawBullet('Developed StarPals AI, an LLM based film-casting system using Genkit for script analysis, character extraction, and actor-role compatibility scoring. (live: starpals-ai.vercel.app, github: github.com/syedirfanx/starpals-ai)');
  drawBullet('Designed Lifestyle OS, an AI assisted personal decision support system for organizing lifestyle, financial commitments, and long-term planning. (live: lifestyle-os-tan.vercel.app, github: github.com/syedirfanx/lifestyle-os)');
  drawBullet('Implemented a Bangla news OCR and summarization pipeline combining Tesseract OCR with LexRank extractive summarization, storing structured output to Google Drive.');
  y += 4;

  // Swift71
  checkPageBreak(28);
  doc.setFont('times', 'bold');
  doc.text('Software Engineer', marginX, y);
  doc.setFont('times', 'normal');
  doc.text(', Swift71 — Dhaka, Bangladesh', marginX + doc.getTextWidth('Software Engineer'), y);
  doc.text('Nov 2020 – Nov 2021', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;
  drawBullet('Worked on developing e-commerce mobile app in Flutter hybrid framework.');
  drawBullet('Maintained on-time delivery across cross-functional teams.');
  y += 4;

  // Codephilics
  checkPageBreak(28);
  doc.setFont('times', 'bold');
  doc.text('Machine Learning Engineer', marginX, y);
  doc.setFont('times', 'normal');
  doc.text(', Codephilics — Dhaka, Bangladesh', marginX + doc.getTextWidth('Machine Learning Engineer'), y);
  doc.text('Mar 2020 – Oct 2020', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;
  drawBullet('Built a CNN based face mask detection system using TensorFlow/Keras and OpenCV, reaching 95% detection accuracy.');
  drawBullet('Designed a Bengali National ID card OCR system using Tesseract, reaching 85% text extraction accuracy.');
  drawBullet('Automated web scraping with Beautiful Soup for news aggregation project, reducing manual data collection effort.');

  // SKILLS
  drawSectionHeader('Skills');
  const skillsList = [
    { label: 'Programming Languages: ', val: 'Python' },
    { label: 'Deep Learning: ', val: 'Convolutional Neural Networks (CNN), Generative Adversarial Networks (GAN)' },
    { label: 'Natural Language Processing: ', val: 'Text Processing, Optical Character Recognition (OCR)' },
    { label: 'Generative AI: ', val: 'Large Language Models (LLMs), Genkit, Prompt Engineering' },
    { label: 'Machine Learning: ', val: 'Supervised & Unsupervised Learning, Data Processing and Manipulation, Model Training, Model Optimization, Feature Engineering' },
    { label: 'Libraries and Frameworks: ', val: 'Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch' },
    { label: 'Databases: ', val: 'MySQL, PostgreSQL, Relational Database Design' },
    { label: 'Data Analysis: ', val: 'Tableau, Power BI, MS Excel' },
  ];

  for (const sk of skillsList) {
    checkPageBreak(16);
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    const labelW = doc.getTextWidth(sk.label);
    doc.text(sk.label, marginX, y);
    doc.setFont('times', 'normal');
    const valLines = doc.splitTextToSize(sk.val, contentWidth - labelW);
    doc.text(valLines[0], marginX + labelW, y);
    for (let i = 1; i < valLines.length; i++) {
      y += lineSpacing;
      doc.text(valLines[i], marginX + 10, y);
    }
    y += lineSpacing + 1;
  }

  // LEADERSHIP / SERVICE / COLLABORATION
  drawSectionHeader('Leadership / Service / Collaboration');
  
  checkPageBreak(28);
  doc.setFont('times', 'bold');
  doc.text('North South University Toastmasters Club (Toastmasters International)', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('2017', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;
  drawBullet('Developed public speaking and leadership skills as a charter member of North South University Toastmasters Club.');
  y += 4;

  checkPageBreak(28);
  doc.setFont('times', 'bold');
  doc.text('North South University Electrical and Computer Engineering Department', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('2017 - 2018', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;
  drawBullet('Coordinated departmental community event NSU ECE Iftar program through managing, planning and volunteer teams to ensure a seamless experience for students and faculty members.');
  y += 4;

  checkPageBreak(28);
  doc.setFont('times', 'bold');
  doc.text('North South University Problem Solvers', marginX, y);
  doc.setFont('times', 'normal');
  doc.text('2016 - 2017', pageWidth - marginX, y, { align: 'right' });
  y += lineSpacing;
  drawBullet('Engaged in competitive programming and algorithmic problem-solving sessions.');

  // REFERENCES
  drawSectionHeader('References');
  checkPageBreak(20);
  doc.setFont('times', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);
  doc.text('Available upon request.', marginX, y);

  // Save the PDF
  doc.save('Syed_Irfan_CV.pdf');
}
