import React from 'react';
import '../css/test.css';

function Cards() {
  const cards = [
    {
      title: 'EE 342 - Classical Controls Lab',
      professors: [
        {
          name: 'Mckell - Wilson version:',
          labs: [
            { name: 'Lab 1', url: 'https://docs.google.com/document/d/1Oh5y2mKNaKKBFovJNKKsv-Gd-RaRAMR6T7xtKDo7DgY/edit?usp=sharing', comment: '• Experiment #1: System Modeling' },
            { name: 'Lab 1.5', url: 'https://docs.google.com/document/d/1BZ1aeFmbQIXy9cCnk2LiXULFnTa0xzKVtcKUfMiQzqs/edit?usp=sharing', comment: '• Experiment #1.5: Open-Loop System Analysis' },
            { name: 'Lab 2', url: 'https://docs.google.com/document/d/1XnQNpONKwrDlnVruVbr28u4ETSlucP1p7BYWcZaOuHU/edit?usp=sharing', comment: '• Experiment #2: Closed-loop System Analysis' },
            { name: 'Lab 3', url: 'https://docs.google.com/document/d/1tf8KwtBG8opgBiaKwImhM31mdpXo110qsWXRlAX4c5Y/edit?usp=sharing', comment: '• Experiment #3: Root Locus and Stability Analysis' },
            { name: 'Lab 4', url: 'https://docs.google.com/document/d/1zGLz6V_SoV5CBuGGfZCEnoh9vDHj2b_q8QsEcnf7LoE/edit?usp=sharing', comment: '• Experiment #4: Lead Compensator of Closed-loop system' },
            { name: 'Lab 5', url: 'https://docs.google.com/document/d/1ZnMW4oeMiWWt1JFLVLl61zrc2O5L_ppV0nZNogSJq_Y/edit?usp=sharing', comment: '• Experiment #5: PID Control of Inverted Pendulum System' },
            { name: 'Lab 6', url: 'https://docs.google.com/document/d/1egvzhs9pPB5bVJlM2t_DC3H2rin5HpY2w7r9wl9741c/edit?usp=sharing', comment: '• Experiment #6: Frequency Response & Stability Margins' },
          ],
        },
      ],
    },
    {
      title: 'EE 261 - Intro C Programming Hardware Emphasis',
      professors: [
        {
          name: 'Bland - Wilson Version:',
          labs: [
            // { name: 'LED', url: '/ee306/lab2', comment: 'LED Matrix Address' },
            { name: 'Part 1', url: 'https://replit.com/@WilsonSzeto/EE-Project-Part-1', comment: 'Project Part 1 - Running basic program in IDE' },
            { name: 'Part 2', url: 'https://replit.com/@WilsonSzeto/EE-Project-Part-2', comment: 'Project Part 2 - Implementing Readline function for file i/o' },
            { name: 'Part 3', url: 'https://replit.com/@WilsonSzeto/EE-Project-Part-3', comment: 'Project Part 3 - Parsing Callsigns' },
            { name: 'Part 4', url: 'https://replit.com/@WilsonSzeto/EE-Project-Part-4', comment: 'Project Part 4 - Converting Lat/Long Coords into DMS' },
            { name: 'Part 5', url: 'https://replit.com/@WilsonSzeto/EE-261-Lab-5', comment: 'Project Part 5 - Distance between two points on earth' },
            { name: 'Final', url: 'https://replit.com/@WilsonSzeto/Final', comment: 'Final - Parting Shot - ASCII conversion' },
          ],
        },
      ],
    },
    {
      title: 'EE 346 - Semiconductor Lab',
      professors: [
        {
          name: 'Vyas - Wilson version:',
          labs: [
            { name: 'Lab 1', url: 'https://drive.google.com/file/d/1YC7HAFN6rTZNzGBxQKz2-ExZmMCbDbyX/view?usp=sharing', comment: '• Lab 1 - Introduction To PSpice ' },
            { name: 'Lab 2', url: 'https://drive.google.com/file/d/1goG3MXLn1MzqgYRCvEP8DytcnLukN8Xa/view?usp=sharing', comment: '• Lab 2 - Operational Amplifiers ' },
            { name: 'Lab 3', url: 'https://drive.google.com/file/d/1IxctPuHMb9TAcCFsUoJqXyAPfIJQgeUs/view?usp=sharing', comment: '• Lab 3 - Diode Characteristics ' },
            { name: 'Lab 4', url: 'https://drive.google.com/file/d/1bk-BInV7NRr-1v3u-6fNbrs5VzfTi5Jw/view?usp=sharing', comment: '• Lab 4 - Diode Circuits ' },
            { name: 'Lab 5', url: 'https://drive.google.com/file/d/173jCzhro-6oyQmB1qb8BNVoT2VbO299H/view?usp=sharing', comment: '• Lab 5 - Breakdown Diodes ' },
            { name: 'Lab 6', url: 'https://drive.google.com/file/d/1qMfghFPfgS0BGssI0jhip1miHktC46Lh/view?usp=sharing', comment: '• Lab 6 - JFET Characteristics ' },
            { name: 'Lab 7', url: 'https://drive.google.com/file/d/1kQGetH544Sp8hFyMIeB1KOiE_BYlsdx7/view?usp=sharing', comment: '• Lab 7 - Bipolar Junction Transistor ' },
            { name: 'Lab 8', url: 'https://drive.google.com/file/d/1zCq0EC0bPajd3DTViG2OHMKz7ngiK7Mm/view?usp=sharing', comment: '• Lab 8 - Design of CE Biasing Circuit ' },
          ],
        },
        // {
        //   name: 'Other:',
        //   labs: [
        //     { name: 'Lab 2', url: '/ee306/lab2', comment: 'Manual' },
        //   ],
        // },
      ],
    },
    // {
    //   title: 'EE 347 - Digital Electronics Lab',
    //   professors: [
    //     {
    //       name: 'Vyas - Wilson version:',
    //       labs: [
    //         { name: 'PreLab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'PreLab 1 - MOSFET Characteristics & Inverter' },
    //         { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 2 - CMOS VTC & Noise Margins' },
    //         { name: 'PreLab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'PreLab 3 - CMOS Logic and Speed' },
    //         { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 4 - Static & Dynamic CMOS Gates' },
    //         { name: 'PreLab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'PreLab 5 - Dynamic Storage Devices' },
    //         { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 6 - CMOS & TTL Power Dissipation' },
    //         { name: 'PreLab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'PreLab 7 - Emitter Coupled Logic Gates' },
    //         { name: 'Lab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'Lab 1 - MOSFET Characteristics & Inverter' },
    //         { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 2 - CMOS VTC & Noise Margins' },
    //         { name: 'Lab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'Lab 3 - CMOS Logic and Speed' },
    //         { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 4 - Static & Dynamic CMOS Gates' },
    //         { name: 'Lab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'Lab 5 - Dynamic Storage Devices' },
    //         { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 6 - CMOS & TTL Power Dissipation' },
    //         { name: 'Lab ', url: 'https://sfstudentintern.org/default.aspx', comment: 'Lab 7 - Emitter Coupled Logic Gates' },
    //       ],
    //     },
    //     {
    //       name: 'Other:',
    //       labs: [
    //         { name: 'Lab 2', url: '/ee306/lab2', comment: 'Manual' },
    //       ],
    //     },
    //   ],
    // },

    // Other card objects
  ];

  return (
    <><h1 class='sectiontitle'>School Labs</h1>
    <div className='card1-grid'>
      {cards.map((card, index) => (
        <div key={index} className='card1'>
          <div className='card1-header'>
            <h2>{card.title}</h2>
          </div>
          <ul className='card1-body'>
            {card.professors.map((professor, index) => (
              <li key={index}>
                {professor.name}
                <ul>
                  {professor.labs.map((lab, index) => (
                    <li class="lab-item" key={index}>
                    <p class="comment">{lab.comment}</p>
                    <p class="link2"><a class="name" href={lab.url} target='_blank' rel='noopener noreferrer'>{lab.name}</a> </p>
                </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards;
