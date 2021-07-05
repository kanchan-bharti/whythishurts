export const data = [
    {
        causes: [
            {
                title: 'Strain',
                article: 'Strained muscles often cause back pain. Strain commonly occurs with incorrect lifting of heavy objects and sudden awkward movements.\nStrain can also result from over-activity. An example is the sore feeling and stiffness that occurs after a few hours of yard work or playing a sport.',
                causes: ['Acute strains can be caused by one event, such as using poor body mechanics to lift something heavy. Chronic muscle strains can result from repetitive injuries when you stress a muscle by doing the same motion over and over.'],
                symptoms: [
                    {
                        pain: ['Tender'],
                        with: ['Redness', 'Bruising', 'Limited motion', 'Muscle Spasm', 'Swelling', 'Muscle weakness']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Physical examination', 'Ultrasound'],
                    treatments: [
                        "Rest. Avoid activities that cause pain, swelling or discomfort. But don't avoid all physical activity.",
                        "Ice. Even if you're seeking medical help, ice the area immediately. Use an ice pack or slush bath of ice and water for 15 to 20 minutes each time and repeat every two to three hours while you're awake for the first few days after the injury.",
                        "Compression. To help stop swelling, compress the area with an elastic bandage until the swelling stops. Don't wrap it too tightly or you may hinder circulation. Begin wrapping at the end farthest from your heart. Loosen the wrap if the pain increases, the area becomes numb or swelling is occurring below the wrapped area.",
                        "Elevation. Elevate the injured area above the level of your heart, especially at night, which allows gravity to help reduce swelling."
                    ]
                }
            },
            {
                title: 'Herniated disks',
                article: "If your herniated disk is in your lower back, you'll typically feel the most pain in your buttocks, thigh and calf. You might have pain in part of the foot, as well. If your herniated disk is in your neck, you'll typically feel the most pain in your shoulder and arm. This pain might shoot into your arm or leg when you cough, sneeze or move into certain positions. Pain is often described as sharp or burning.",
                causes: ["Disk herniation is most often the result of a gradual, aging-related wear and tear called disk degeneration. As you age, your disks become less flexible and more prone to tearing or rupturing with even a minor strain or twist."],
                symptoms: [
                    {
                        pain: ['Sharp', 'Burning', 'In buttocks', 'Gets triggered when you cough/sneeze'],
                        with: ['Numbness', 'Tingling', 'Weakness', 'Leg pain', 'Arm pain']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "X-rays. Plain X-rays don't detect herniated disks, but they can rule out other causes of back pain, such as an infection, tumor, spinal alignment issues or a broken bone.",
                        "CT scan. A CT scanner takes a series of X-rays from different directions and then combines them to create cross-sectional images of your spinal column and the structures around it.",
                        "MRI. Radio waves and a strong magnetic field are used to create images of your body's internal structures. This test can be used to confirm the location of the herniated disk and to see which nerves are affected.",
                        "Myelogram. A dye is injected into the spinal fluid before X-rays are taken. This test can show pressure on your spinal cord or nerves due to multiple herniated disks or other conditions.",
                        "Physical exam"
                    ],
                    treatments: [
                        "Over-the-counter pain medications. If your pain is mild to moderate, your doctor might recommend over-the-counter pain medication, such as acetaminophen (Tylenol, others) ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve).",
                        "Cortisone injections. If your pain doesn't improve with oral medications, your doctor might recommend a corticosteroid that can be injected into the area around the spinal nerves. Spinal imaging can help guide the needle.",
                        "Muscle relaxers. You might be prescribed these if you have muscle spasms. Sedation and dizziness are common side effects.",
                        "Opioids. Because of the side effects of opioids and the potential for addiction, many doctors hesitate to prescribe them for disk herniation. If other medication doesn't relieve your pain, your doctor might consider short-term use of opioids, such as codeine or an oxycodone-acetaminophen combination (Percocet, Roxicet). Sedation, nausea, confusion and constipation are possible side effects from these drugs.",
                        "Physical exam",
                        "Surgery"
                    ]
                }
            },
            {
                title: 'Bulging disk',
                article: 'Tingling or pain in the fingers, hands, arms, neck or shoulders: This could indicate a bulging disc in the cervical area.\n\nPain in the feet, thighs, lower spine and buttocks. This is the most common symptom and could indicate an issue in the lumbar region.',
                causes: [
                    "People who have led a sedentary lifestyle or those who smoke increase the chances for bulging disc.",
                    "Continuous strain on the disc from injury or heavy lifting and strain can wear them down throughout the years.",
                    "Weakened back muscles can accelerate the process and may lead to a sudden herniation of the weakened disc.",
                    "Although bulging discs occur over time, herniated discs may occur quickly by trauma.",
                    "Bad posture including improper body positioning during sleep, sitting, standing or exercise are all risk factors which may contribute to the development of a bulging disc.",
                    "Obesity",
                    "High contact sports or activities are also risk factors.",
                    "Runners who fail to use shoes that provide orthopedic support may also develop bulging discs.",
                    "Activities that place stress and strain on the spine can lead to the weakening of the discs."
                ],
                symptoms: [
                    {
                        pain: ['Pain not in back but neighbour parts'],
                        with: ['Tingling', 'Arm pain', 'Finger pain', 'Neck Pain', 'Shoulder pain', 'Difficulty in walking']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-ray', 'CT scan', 'MRI'],
                    treatments: [
                        "A patient should change body positioning and behaviors (sleeping, sitting and posture positions) first to help reduce any bulging disc symptoms or pain caused by the affected disc. Addressing causal factors may help to slow the worsening of the condition.",
                        "A healthy weight reduction plan and exercise can be used to help obese patients.",
                        "In some cases, a doctor may recommend physical therapy to strengthen muscles in the back and to regain any lost mobility."
                    ]
                }
            },
            {
                title: 'Sciatica',
                article: 'In case of Sciatica, pain radiates from your lower (lumbar) spine to your buttock and down the back of your leg\n\nThe pain can vary widely, from a mild ache to a sharp, burning sensation or excruciating pain. Sometimes it can feel like a jolt or electric shock. It can be worse when you cough or sneeze, and prolonged sitting can aggravate symptoms. Usually only one side of your body is affected.',
                causes: ['Sciatica occurs when the sciatic nerve becomes pinched, usually by a herniated disk in your spine or by an overgrowth of bone (bone spur) on your vertebrae. More rarely, the nerve can be compressed by a tumor or damaged by a disease such as diabetes.'],
                symptoms: [
                    {
                        pain: ['Radiating from lower spine to buttock', 'Mild', 'Sharp', 'Burning', 'On one side of body'],
                        with: ['Leg pain', 'Feels like electric shock']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "Electromyography (EMG). This test measures the electrical impulses produced by the nerves and the responses of your muscles. This test can confirm nerve compression caused by herniated disks or narrowing of your spinal canal (spinal stenosis).",
                        "X-ray",
                        "CT scan",
                        "MRI"
                    ],
                    treatments: [
                        "Anti-inflammatories",
                        "Muscle relaxants",
                        "Narcotics",
                        "Tricyclic antidepressants",
                        "Anti-seizure medications",
                        "Physical therapy",
                        "Steroid injection",
                        "Surgery"
                    ]
                }
            },
            {
                title: 'Arthritis',
                article: 'Arthritis is the swelling and tenderness of one or more joints and it is the leading cause of hand pain. While it can happen anywhere in the body, it is most common in the hands and wrists. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.\n\nSpinal osteoarthritis is also a potential cause for back pain. It’s caused by damage and deterioration in the cartilage of joints in your lower back.',
                causes: [
                    "Osteoarthritis: Wear and tear to cartilages of joints resulting in bone grinding on bone",
                    "Rheumatoid arthritis: Immune system attacks the lining of the joint capsule. As a result the lining becomes inflamed and swollen."
                ],
                symptoms: [
                    {
                        pain: ['Dull', 'Burning'],
                        with: ['Stiffness', 'Swelling', 'Redness', 'Limited motion']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-Rays', 'CT scans', 'MRI', 'Ultrasound'],
                    treatments: [
                        "Painkillers",
                        "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
                        "Counterirritants",
                        "Disease modifying antirheumatic drugs (DMARDs)",
                        "Corticosteroids",
                        "Surgery",
                        "Physical therapy"
                    ]
                }
            },
            {
                title: 'Cervical stenosis:',
                article: "In this condition, the narrowing occurs in the part of the spine in your neck.",
                causes: [
                    "Overgrowth of bone. Wear and tear damage from osteoarthritis on your spinal bones can prompt the formation of bone spurs, which can grow into the spinal canal. Paget's disease, a bone disease that usually affects adults, also can cause bone overgrowth in the spine.",
                    "Herniated disks. The soft cushions that act as shock absorbers between your vertebrae tend to dry out with age. Cracks in a disk's exterior may allow some of the soft inner material to escape and press on the spinal cord or nerves.",
                    "Thickened ligaments. The tough cords that help hold the bones of your spine together can become stiff and thickened over time. These thickened ligaments can bulge into the spinal canal.",
                    "Tumors. Abnormal growths can form inside the spinal cord, within the membranes that cover the spinal cord or in the space between the spinal cord and vertebrae. These are uncommon and identifiable on spine imaging with an MRI or CT.",
                    "Spinal injuries. Car accidents and other trauma can cause dislocations or fractures of one or more vertebrae. Displaced bone from a spinal fracture may damage the contents of the spinal canal. Swelling of nearby tissue immediately after back surgery also can put pressure on the spinal cord or nerves."
                ],
                symptoms: [
                    {
                        pain: ['Pain not in back but neighbour parts'],
                        with: ['Numbness', 'Tingling', 'Weakness', 'Difficulty in walking', 'Imbalance', 'Neck pain', 'Bowel/bladder dysfunction']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "X-rays. An X-ray of your back can reveal bony changes, such as bone spurs that may be narrowing the space within the spinal canal. Each X-ray involves a small exposure to radiation.",
                        "Magnetic resonance imaging (MRI). An MRI uses a powerful magnet and radio waves to produce cross-sectional images of your spine. The test can detect damage to your disks and ligaments, as well as the presence of tumors. Most important, it can show where the nerves in the spinal cord are being pressured.",
                        "CT or CT myelogram. If you can't have an MRI, your doctor may recommend computerized tomography (CT), a test that combines X-ray images taken from many different angles to produce detailed, cross-sectional images of your body. In a CT myelogram, the CT scan is conducted after a contrast dye is injected. The dye outlines the spinal cord and nerves, and it can reveal herniated disks, bone spurs and tumors."
                    ],
                    treatments: [
                        "Pain relievers. Pain medications such as ibuprofen (Advil, Motrin IB, others), naproxen (Aleve, others) and acetaminophen (Tylenol, others) may be used temporarily to ease the discomfort of spinal stenosis. They are typically recommended for a short time only, as there's little evidence of benefit from long-term use.",
                        "Antidepressants. Nightly doses of tricyclic antidepressants, such as amitriptyline, can help ease chronic pain.",
                        "Anti-seizure drugs. Some anti-seizure drugs, such as gabapentin (Neurontin) and pregabalin (Lyrica), are used to reduce pain caused by damaged nerves.",
                        "Opioids. Drugs that contain codeine-related drugs such as oxycodone (Oxycontin, Roxicodone) and hydrocodone (Norco, Vicodin) may be useful for short-term pain relief. Opioids may also be considered cautiously for long-term treatment. But they carry the risk of serious side effects, including becoming habit forming",
                        "Physical therapy",
                        "Surgery"
                    ]
                }
            },
            {
                title: 'Lumbar stenosis',
                article: "In this condition, the narrowing occurs in the part of the spine in your lower back. It's the most common form of spinal stenosis.",
                causes: [''],
                symptoms: [
                    {
                        pain: ['Crampy'],
                        with: ['Numbness', 'Tingling', 'Weakness', 'Leg pain']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "X-rays. An X-ray of your back can reveal bony changes, such as bone spurs that may be narrowing the space within the spinal canal. Each X-ray involves a small exposure to radiation.",
                        "Magnetic resonance imaging (MRI). An MRI uses a powerful magnet and radio waves to produce cross-sectional images of your spine. The test can detect damage to your disks and ligaments, as well as the presence of tumors. Most important, it can show where the nerves in the spinal cord are being pressured.",
                        "CT or CT myelogram. If you can't have an MRI, your doctor may recommend computerized tomography (CT), a test that combines X-ray images taken from many different angles to produce detailed, cross-sectional images of your body. In a CT myelogram, the CT scan is conducted after a contrast dye is injected. The dye outlines the spinal cord and nerves, and it can reveal herniated disks, bone spurs and tumors."
                    ],
                    treatments: [
                        "Pain relievers. Pain medications such as ibuprofen (Advil, Motrin IB, others), naproxen (Aleve, others) and acetaminophen (Tylenol, others) may be used temporarily to ease the discomfort of spinal stenosis. They are typically recommended for a short time only, as there's little evidence of benefit from long-term use.",
                        "Antidepressants. Nightly doses of tricyclic antidepressants, such as amitriptyline, can help ease chronic pain.",
                        "Anti-seizure drugs. Some anti-seizure drugs, such as gabapentin (Neurontin) and pregabalin (Lyrica), are used to reduce pain caused by damaged nerves.",
                        "Opioids. Drugs that contain codeine-related drugs such as oxycodone (Oxycontin, Roxicodone) and hydrocodone (Norco, Vicodin) may be useful for short-term pain relief. Opioids may also be considered cautiously for long-term treatment. But they carry the risk of serious side effects, including becoming habit forming",
                        "Physical therapy",
                        "Surgery"
                    ]
                }
            },
            {
                title: 'Osteoporosis',
                article: 'Loss of bone density and thinning of the bone, called osteoporosis, can lead to small fractures in your vertebrae. These fractures can cause serious pain and are referred to as compression fractures.',
                causes: ['How likely you are to develop osteoporosis depends partly on how much bone mass you attained in your youth. Peak bone mass is somewhat inherited and varies also by ethnic group. The higher your peak bone mass, the more bone you have "in the bank" and the less likely you are to develop osteoporosis as you age.'],
                symptoms: [
                    {
                        pain: ['Severe', 'Constant', 'Radiating outward'],
                        with: ['Loss of height over time', 'Stooped posture', 'A bone that breaks more often']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-rays'],
                    treatments: ['Bisphosphonates', 'Monoclonal antibody medications', 'Hormone-related therapy', 'Bone-building medications']
                }
            },
            {
                title: 'Kidney Infection',
                article: '',
                causes: ["Bacteria that enter your urinary tract through the tube that carries urine from your body (urethra) can multiply and travel to your kidneys. This is the most common cause of kidney infections."],
                symptoms: [
                    {
                        pain: ['Symptoms other than pain', 'Burning', 'While urinating'],
                        with: ['Fever', 'Chills', 'Back, side (flank) or groin pain', 'Abdominal pain', 'Frequent urination', 'Strong, persistent urge to urinate', 'Nausea', 'Vomiting', 'Pus/Blood in urine', 'Smelling urine']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Urine sample analysis', 'X-ray', 'Ultrasound', 'CT scan'],
                    treatments: ['Antibiotics']
                }
            },
        ],
        rare_causes: [
            {
                title: 'Degenerative spondylolisthesis',
                article: 'Displacement of one vertebral body onto another',
                causes: [
                    "Dehydrated disks. Disks act like cushions between the vertebrae of your spine. By the age of 40, most people's spinal disks begin drying out and shrinking, which allows more bone-on-bone contact between the vertebrae.",
                    "Herniated disks. Age also affects the exterior of your spinal disks. Cracks often appear, leading to bulging (herniated) disks — which sometimes can press on the spinal cord and nerve roots.",
                    "Bone spurs. Disk degeneration often results in the spine producing extra amounts of bone in a misguided effort to strengthen the spine. These bone spurs can sometimes pinch the spinal cord and nerve roots.",
                    "Stiff ligaments. Ligaments are cords of tissue that connect bone to bone. Spinal ligaments can stiffen with age, making your neck less flexible."
                ],
                symptoms: [
                    "Tingling, numbness and weakness in your arms, hands, legs or feet",
                    "Lack of coordination and difficulty walking",
                    "Loss of bladder or bowel control"
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "Neck X-ray. An X-ray can show abnormalities, such as bone spurs, that indicate cervical spondylosis. Neck X-ray can also rule out rare and more serious causes for neck pain and stiffness, such as tumors, infections or fractures.",
                        "CT scan. A CT scan can provide more detailed imaging, particularly of bones.",
                        "MRI. MRI can help pinpoint areas where nerves might be pinched.",
                        "Myelography. A tracer dye is injected into the spinal canal to provide more detailed X-ray or CT imaging.",
                        "Electromyography. This test measures the electrical activity in your nerves as they transmit messages to your muscles when the muscles are contracting and at rest.",
                        "Nerve conduction study. Electrodes are attached to your skin above the nerve to be studied. A small shock is passed through the nerve to measure the strength and speed of nerve signals."
                    ],
                    treatments: [
                        "Nonsteroidal anti-inflammatory drugs. While some types of NSAIDs are available over the counter, you may need prescription-strength versions to relieve the pain and inflammation associated with cervical spondylosis.",
                        "Corticosteroids. A short course of oral prednisone might help ease pain. If your pain is severe, steroid injections may be helpful.",
                        "Muscle relaxants. Certain drugs, such as cyclobenzaprine, can help relieve muscle spasms in the neck.",
                        "Anti-seizure medications. Some epilepsy medications, such as gabapentin (Neurontin, Horizant) and pregabalin (Lyrica), can dull the pain of damaged nerves.",
                        "Antidepressants. Certain antidepressant medications have been found to help ease neck pain from cervical spondylosis.",
                        "Therapy",
                        "Surgery"
                    ]
                }
            },
            {
                title: 'Cauda equina syndrome (a medical emergency)',
                article: 'loss of nerve function at the lower spinal cord',
                causes: [
                    "Spinal lesions and tumors",
                    "Spinal infections or inflammation",
                    "Lumbar spinal stenosis",
                    "Violent injuries to the lower back (gunshots, falls, auto accidents)",
                    "Birth abnormalities",
                    "Spinal arteriovenous malformations (AVMs)",
                    "Spinal hemorrhages (subarachnoid, subdural, epidural)",
                    "Postoperative lumbar spine surgery complications",
                    "Spinal anesthesia"
                ],
                symptoms: [
                    "Urinary retention: the most common symptom. The patient’s bladder fills with urine, but the patient does not experience the normal sensation or urge to urinate.",
                    "Urinary and/or fecal incontinence. The overfull bladder can result in incontinence of urine. Incontinence of stool can occur due to dysfunction of the anal sphincter.",
                    "“Saddle anesthesia” sensory disturbance, which can involve the anus, genitals and buttock region.",
                    "Weakness or paralysis of usually more than one nerve root. The weakness can affect lower extremities.",
                    "Pain in the back and/or legs (also known as sciatica)."
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: [
                        "Patient history and physical exam: Extremely important to assess for cauda equina syndrome.",
                        "Magnetic resonance imaging (MRI): A diagnostic test that produces three-dimensional images of body structures using magnetic fields and computer technology. MRI produces images of the spinal cord, nerve roots and surrounding areas.",
                        "CT Scan: An x-ray of the spinal canal that gives good definition of the bone. If CES is secondary to bone collapse from trauma or cancer, this study can help define that. Visualization of the discs are not as easily seen on CT scan. If no MRI is available, this study can give information helpful to evaluate the anatomy of the region, particularly if done in combination with a myelogram described below.",
                        "Myelogram: : An X-ray of the spinal canal following injection of a contrast material into the surrounding cerebrospinal fluid spaces; can show displacement on the spinal cord or spinal nerves due to herniated discs, bone spurs, tumors, etc.",
                    ],
                    treatments: [
                        "Emergency surgery",
                    ]
                }
            },
            {
                title: 'Cancer or nonmalignant tumor in the spine',
                article: '',
                causes: ["It's not clear why most spinal tumors develop. Experts suspect that defective genes play a role."],
                symptoms: [
                    "Pain at the site of the tumor due to tumor growth",
                    "Back pain, often radiating to other parts of your body",
                    "Feeling less sensitive to pain, heat and cold",
                    "Loss of bowel or bladder function",
                    "Difficulty walking, sometimes leading to falls",
                    "Back pain that's worse at night",
                    "Loss of sensation or muscle weakness, especially in your arms or legs",
                    "Muscle weakness , which may be mild or severe, in different parts of your body"
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['MRI', 'CT scan', 'Biopsy'],
                    treatments: ['Radiation therapy', 'Chemotherapy', 'Surgery']
                }
            }
        ]
    }
]