export const data = [
    {
        causes: [
            {
                title: 'Muscle tension and strain.',
                article: 'The causes can include',
                they_include: ['Bad posture', 'A sudden jerk to the neck during exercise', 'Working for long hours at a desk in the same position', 'Sleeping in a bad position'],
                symptoms: [
                    {
                        pain: ['Tender', 'Stiff'],
                        with: ['Redness', 'Bruising', 'Limited motion', 'Spasm', 'Swelling', 'Weakness']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Physical Examination'],
                    treatments: ['Rest', 'Ice-heat', 'Stretches']
                }
            },
            {
                title: 'Injury',
                article: 'The neck is vulnerable to injuries that can be caused due to falls, accidents and sports. In these cases, the muscles in the neck are subjected to movement outside their normal range.',
                they_include: [],
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Physical Examination by a doctor.'],
                    treatments: []
                }
            },
            {
                title: 'Heart attack',
                article: 'In certain cases, neck pain is a symptom of heart attacks but it usually presents itself with other symptoms of heart attacks. These symptoms can include:',
                they_include: ['Shortness of breath', 'Sweating', 'Nausea', 'Vomiting', 'Fatigue', 'Weakness', 'Pain in the arm or jaw'],
                symptoms: [
                    {
                        pain: ['Pain in the arm or jaw', 'Radiating', 'Intermittent'],
                        with: ['Shortness of breath', 'Sweating', 'Nausea', 'Vomiting', 'Fatigue', 'Weakness', 'Anxiety']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['ECG', 'Blood tests', 'Chest X-ray', 'Echocardiogram', 'Angiogram', 'Cardiac CT scan'],
                    treatments:['Aspirin','Antiplatelet agents','Surgery','Pain relievers']
                }
            },
            {
                title: 'Meningitis',
                article: 'Meningitis is caused by an inflammation of the thin tissue surrounding the brain and spinal cord. In people who have meningitis, neck pain is accompanied by a fever and a headache',
                they_include: ['Shortness of breath', 'Sweating', 'Nausea', 'Vomiting', 'Pain in the arm or jaw'],
                symptoms: [
                    {
                        pain: ['Stiff','Severe'],
                        with: ['Fever', 'Headache','Nausea','Vomiting','Confusion','Seizures','Sleepiness','Light sensitivity','Lost appetite','Skin rash']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Blood test','Spinal tap','CT Scan'],
                    treatments: ['Bed rest','Plenty of fluids','Over-the-counter pain medications to help reduce fever and relieve body aches']
                }
            },
            {
                title: 'Rheumatoid Arthritis',
                article: 'The condition, when occurring in the neck area can cause pain along with swelling of the joints and bone spurs.',
                they_include: [],
                symptoms: [
                    {
                        pain: ['Tender','Stiff','In morning'],
                        with: ['Swelling', 'Bone spurs', 'Warm joints','Fatique','Fever','Lost appetite']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-rays','Ultrasound','MRI scans'],
                    treatments: ['Nonsteroidal anti-inflammatory drugs (NSAIDs)','Steroids','Therapy','Surgery']
                }
            },
            {
                title: 'Osteoporosis',
                article: 'The condition can weaken bones and lead to small fractures. While this commonly occurs in the hands or knees, it can also occur in the neck',
                they_include: [],
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['Back pain','Slow height reduction','Stooped posture','Easy breakage of bone']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Bone density tests','X-rays','CT scans'],
                    treatments: ['Bisphosphonates','Hormone-related therapy','Monoclonal antibody treatments']
                }
            },
            {
                title: 'Fibromyalgia',
                article: 'The condition causes muscle pain throughout the body, especially in the neck and shoulder region.',
                symptoms: [
                    {
                        pain: ['Widespread'],
                        with: ['Fatique','Cognitive difficulties']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Complete blood count','Erythrocyte sedimentation rate','Cyclic citrullinated peptide test','Rheumatoid factor','Thyroid function tests','Antinuclear antibody tests','Vitamin D test'],
                    treatments: ['Pain relievers','Physical therapy','Muscle relaxants']
                }
            },
            {
                title: 'Spondylosis',
                article: 'This condition is caused by degeneration of cervical disks that can occur as people age',
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['Tingling','Weakness', 'Balance problem','Bowel/bladder dysfunction']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-rays','CT scans','MRI Scans'],
                    treatments: ['Nonsteroidal anti-inflammatory drugs (NSAIDs)','Corticosteroids','Muscle relaxants']
                }
            },
            {
                title: 'Herniated Cervical Disk',
                article: 'This condition adds pressure to the spinal cord or nerve roots and is caused due to trauma or an injury',
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['Limbs pain','Tingling','Numbness','Weakness']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['Neck X-rays','CT scans','MRI scans'],
                    treatments: ['Nonsteroidal anti-inflammatory drugs (NSAIDs)','Corticosteroids','Muscle relaxants']
                }
            },
            {
                title: 'Spinal stenosis',
                article: 'The condition occurs when the spinal column narrows causing pressure on the spinal cord or nerve roots as it exits the vertebrae',
                symptoms: [
                    {
                        pain: ['Symptom other than pain'],
                        with: ['Numbness','Tingling','Balance problem','Bowel/bladder dysfunction']
                    }
                ],
                preventive_treatment: {
                    used_when: '',
                    diagnosis: ['X-rays','CT scans','MRI scans'],
                    treatments: ['Pain relievers','Antidepressants','Steroid injection','Physical therapy','Surgery']
                }
            },
        ],

        rare_cases: ['Tumors', 'Cancer of the Spine', 'Infections', 'Abscesses', 'Congenital abnormalities'],

        diagnosis: [
            {
                common_causes: [],
                cure: [
                    {
                        point: 'There are some common treatments:',
                        subpoint: '',
                        helping_in_treatment: [
                            'Ice and heat therapy: Apply ice at the site of pain for a few days. After that, apply heat using a heating pad, hot compress or simply, a hot shower.',
                            'OTC pain relievers',
                            'Taking a few days off from physical activities that aggravate symptoms',
                            'Exercise, stretching and physical therapy: Exercising the neck everyday (Slowly stretching your head in a side-to-side and up-and-down motion) or a gentle neck massage.',
                            'Pain medication.',
                            'Corticosteroid injections.',
                            'Traction',
                            'Muscle relaxants.',
                            'Neck collar',
                            'Acupunture',
                            'Chiropractic treatment',
                            'Transcutaneous electric nerve stimulation (A TENS unit is a device that sends small electrical currents to targeted body parts. These currents are used to relieve pain)'
                        ]
                    }
                ],
                after_treatment: 'Practice good posture and take rest when the neck muscles are sore. Consult your doctor on which specific treatment best suits you'
            },
            {
                when_to_see_doctor: [
                    {
                        point: 'Seek medical help immediately if you’ve been in an accident or fall that hurts your neck and also if symptoms persist for more than a week. You should see your doctor of you also have',
                        pain_with: [
                            'Severe neck pain with no apparent cause', 'A lump in your neck', 'Swollen glands', 'Weakness', 'Numbness', 'Nausea', 'Headache', 'Fever', 'Pain radiating down your arms or legs', 'Tingling','Numbness', 'Inability to touch the chin to your chest', 'Bladder or bowel dysfunction', 'Inability to move your arms or legs'
                        ],
                        tests: [
                            {
                                title: 'Blood Tests',
                                article: ''
                            },
                            {
                                title: 'X-ray',
                                article: 'A lumbosacral spine X-ray, or lumbar spine X-ray, is an imaging test that helps a doctor view the anatomy of your lower back.'
                            },
                            {
                                title: 'CT Scans',
                                article: 'A type of X-ray that produces cross-sectional images of a specific part of the body.'
                            },
                            {
                                title: 'MRI scan',
                                article: 'Done is cases of Stroke, Trauma, or when blood clots on the brain are suspected. MRI scans use magnets and radio waves to capture images inside your body without making a surgical incision. The scan allows the doctor to see the soft tissue of your body, like muscles and organs, in addition to your bones.'
                            },
                            {
                                title: 'Lumbar puncture (Also known as a spinal tap)',
                                article: ' It is a medical procedure that can involve collecting a sample of cerebrospinal fluid (CSF). CSF is the fluid that surrounds your spinal cord and brain. A laboratory can test it for signs of certain medical conditions and infections.'
                            }
                        ]
                    }
                ]
            }
        ],
        after_treatment_section: 'You can discuss with your doctor on which specific treatment would be best for relieving your headaches.'
    }
]