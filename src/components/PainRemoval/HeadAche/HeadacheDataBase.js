export const data = [
    {
        causes: [
            {
                title: 'Primary causes of headaches',
                article: 'Doctors have identified several different causes of headaches. \n\nPrimary causes of headaches are causes that aren’t related to separate medical conditions. These headaches are the result of an underlying process in the brain. Examples of common primary headaches include migraine, cluster, and tension headaches.',
                subtitle: []

            },
            {
                title: 'Secondary causes of headaches',
                article: 'Secondary headaches are those that are due to an underlying medical condition. Examples of secondary headache causes include:',
                subtitle: [
                    {
                        title: 'Brain tumor',
                        article: 'The presence of a brain tumor or brain aneurysm (brain bleed) can lead to headache. This is because there is only so much room in the skull. When the skull starts to build up with blood or extra tissue, the compression on the brain can cause a headache.'
                    },
                    {
                        title: 'Cervicogenic headaches',
                        article: 'Cervicogenic headaches occur when discs start to degenerate and press on the spinal column. The result can be significant neck pain as well as headaches.'
                    },
                    {
                        title: 'Extra Medication headache',
                        article: 'If a person takes a significant amount of pain medications daily and starts to taper them or discontinue them altogether, a headache can result. Examples of these medications include hydrocodone.'
                    },
                    {
                        title: 'Meningitis-related headache',
                        article: 'Meningitis is an infection of the meninges, which are the membranes that line the skull and enclose the spinal cord and brain.'
                    },
                    {
                        title: 'Post-traumatic headache',
                        article: 'Sometimes a person will experience headaches after trauma to the head, sustained during an event like a fall, car accident, or skiing accident.'
                    },
                    {
                        title: 'Sinus headaches',
                        article: 'Inflammation in the normally air-filled sinus cavities in the face can cause pressure and pain that leads to a sinus headache.'
                    },
                    {
                        title: 'Spinal headache',
                        article: 'A spinal headache can occur due to a slow leak of cerebrospinal fluid, usually after a person has an epidural, spinal tap, or spinal block for anesthesia.'
                    }
                ]
            }
        ],
        types: [
            {
                title: 'Tension headaches',
                article: 'Tension headaches are the most common type of headache and occur most frequently in women over age 20. These headaches are often described as feeling like a tight band around the head. They are caused by a tightening of the muscles in the neck and scalp. Poor posture and stress are contributing factors. \n \nTension headaches usually last for several minutes, but in some cases, they can last for several days. They also tend to be recurrent.',
                symptoms: [
                    {
                        pain: ['Dull and aching'],
                        with: ['Neck stiffness', 'Scalp tenderness', 'Shoulder stiffness', 'Tightness or pressure across forehead extending to sides/back of head.', 'Visual disturbances']
                    }
                ],

                used_when: 'Tension headaches occur three or more times per month.',
                treatments: ['Sumatriptan is a drug that’s commonly prescribed for the control of migraine headaches.']

            },
            {
                title: 'Cluster headaches',
                article: 'Cluster headaches are non-throbbing headaches that cause excruciating, burning pain on one side of the head or behind the eye. They usually cause the eyes to tear up and produce nasal congestion or rhinorrhea (runny nose). These headaches can last for extended periods of time, known as the cluster period. The cluster period can be as long as six weeks. \n \nCluster headaches may occur every day and more than once a day. The cause is unknown; however, this type headache is rare and generally affects men age 20 to 40. ',
                symptoms: [
                    {
                        pain: ['Throbbing or constant', 'Behind the eyes', 'Starts 1-2 hours after going to bed'],
                        with: ['']
                    }
                ],
                used_when: 'Cluster headaches occur three or more times per month.',
                treatments: ['Beta blockers (propranolol, atenolol)', 'Verapamil (calcium channel blocker)', 'Methysergide maleate (helps to reduce blood vessel constriction)', 'Amitriptyline (antidepressant)', 'Valproic acid (anti-seizure medication)', 'Dihydroergotamine', 'Lithium', 'Topiramate']
            },
            {
                title: 'Migraine headaches',
                article: 'Migraine headaches are severe headaches that can cause throbbing, pounding pain, usually on one side of the head. Several different types of migraine headache exist. This includes chronic migraines, which are migraines that occur 15 or more days a month.\n \nHemiplegic migraines are those with symptoms resembling that of a stroke. A person can even experience migraines without head pain, which means they have migraine symptoms such as nausea, visual disturbances, and dizziness, but without head pain.',
                symptoms: [
                    {
                        pain: ['Pulsating', 'On one side of head', 'Throbbing or constant', 'Severe'],
                        with: ['Nausea', 'Senstivity to sound and light', 'Vomiting']
                    }
                ],

                used_when: '',
                treatments: ['']

            },
            {
                title: 'Rebound headaches',
                article: 'Rebound headaches are those that occur after a person stops taking medications they used regularly to treat headaches. A person is more likely to experience rebound headaches if they take medications such as acetaminophen, triptans (Zomig, Imitrex), ergotamine (Ergomar), and painkillers (like Tylenol with codeine).',
                symptoms: [
                    {
                        pain: ['Dull and aching', 'persistent', 'Almost occurs daily', 'Comes back after medication wears off'],
                        with: ['Irritability', 'Nausea', 'Restlessness', 'Trouble remembering important details']
                    }
                ],
                used_when: '',
                treatments: ['']
            },
            {
                title: 'Thunderclap headaches',
                article: 'Thunderclap headaches are abrupt, severe headaches that often come on very quickly. They will usually appear without warning and last up to five minutes. These headache types can signal an underlying problem with blood vessels in the brain and often require prompt medical attention. A significant number of headache types exist. Learn more about 10 of the most common headache types.',
                symptoms: [
                    {
                        pain: ['Severe', 'Sudden pain'],
                        with: ['']
                    }
                ],
                used_when: '',
                treatments: ['']
            },
        ],
        diagnosis: [
            {
                common_causes: ['Sudden absence of medication', 'allergy to a food', 'coffee drinker, suddenly stopped drinking'],
                cure: [
                    {
                        point: 'Most headaches aren’t symptoms of serious medical conditions and can be successfully treated with over-the-counter medications, such as ',
                        subpoint: 'aspirin, acetaminophen (Tylenol), or ibuprofen (Advil).',
                        helping_in_treatment: [
                            'A hot bath or shower can help relax tense muscles.',
                            'Biofeedback is a relaxation technique that helps with pain management.',
                            'Stress management classes can teach you how to cope with stress and how to relieve tension.',
                            'Cognitive behavioral therapy is a type of talk therapy that shows you how to recognize situations that make you feel stressed and anxious.',
                            'Acupuncture is an alternative therapy that may reduce stress and tension by applying fine needles to specific areas of your body.',
                            'Mild to moderate exercise can also help increase the production of certain brain chemicals that make you feel happier and more relaxed.',
                            'Cold or hot therapy involves applying a heating pad or ice pack to your head for 5 to 10 minutes multiple times a day.'
                        ]
                    }
                ]
            },
            {
                when_to_see_doctor: [
                    {
                        point: 'Most headaches aren’t symptoms of a life-threatening illness. However, you should contact your doctor if a headache occurs after head trauma. You should also call your doctor immediately if a headache is accompanied by the following symptoms:',
                        pain_with: [
                            'Drowsiness', 'Fever', 'Vomiting', 'Facial Numbness', 'Slurred speech', 'Weakness in an arm or a leg', 'Convulsions', 'Confusion', 'pressure around eyes', 'yellowish-green nasal discharge', 'sore throat'
                        ],
                        tests: [
                            {
                                title: 'CBC',
                                article: 'A CBC determines if there are any increases or decreases in your blood cell counts. Normal values vary depending on your age and your gender, i.e. a blood test that can show signs of an infection.'
                            },
                            {
                                title: 'Skull X-rays',
                                article: 'This is an imaging test that provides detailed pictures of the bones of the skull.'
                            },
                            {
                                title: 'Sinus X-rays',
                                article: 'This is an imaging test that may be performed if sinusitis is suspected.'
                            },
                            {
                                title: 'Head CT or MRI scan',
                                article: 'Done is cases of Stroke, Trauma, or when blood clots on the brain are suspected.'
                            }
                        ]
                    }
                ]
            }
        ],
        trivia: [
            {
                title: 'Headache vs. migraine',
                article: 'Migraines are the most severe and complex type of headache. Researchers believe they may be caused by changes in the activity of nerve pathways and brain chemicals. Genetic factors and environmental factors are also thought to affect a person’s susceptibility to developing migraines.\n\nMigraines are very intense, throbbing headaches that affect one side of the head. They can also increase sensitivity to light and noise. They may last anywhere from several hours to several days.',
                subtrivia: [
                    {
                        title: 'Incidence & Types',
                        article: [
                            {
                                point: 'According to the Migraine Research Foundation, nearly 1 out of every 4 households in the United States includes someone with a migraine. Migraines are one of the top 20 most disabling illnesses in the world.\n\nAmong adolescents, migraines are more common in boys than in girls. Among adults, however, migraines occur more frequently in women than in men. They are also more likely to affect those who have family members that often experience migraines.\n\nThere are two basic types of migraine headaches: migraine with aura and migraine without aura. Auras are visual disturbances that consist of bright spots, flashing lights, or moving lines. In some cases, auras cause a temporary loss of vision. These visual disturbances occur about 30 minutes before the migraine begins and can last for 15 minutes.\n\nMigraine with aura tends to be less severe and disabling than migraine without aura. However, most people experience migraine without aura.\n\nHemiplegic migraines are another type of migraine. These migraines are accompanied by stroke-like symptoms, such as slurred speech and numbness or weakness on one side of the body.',
                                these_include: ['']
                            }

                        ]
                    },
                    {
                        title: 'Migraine phases',
                        article: [
                            {
                                point: 'Migraines have three phases: prodrome, peak headache, and postdrome.\n\nProdrome is the period leading up to the migraine. This is the time when auras can occur. The prodrome phase may affect concentration, mood, and appetite. This phase may also cause frequent yawning.\n\nPeak headache is the period when migraine symptoms become the most severe. This phase may last for several minutes.\n\nPostdrome is the 24-hour period after the migraine. During this time, drowsiness can occur and mood can fluctuate between feelings of sadness and feelings of joy.',
                                these_include: ['']
                            }
                        ]
                    },
                    {
                        title: 'Migraine triggers',
                        article: [
                            {
                                point: 'The exact cause of migraines isn’t known. However, there are numerous factors that are known to trigger the onset of migraine episodes.',
                                these_include: ['']
                            },
                            {
                                point: '',
                                these_include: ['Fluctuating hormone levels, especially among boys going through puberty, and women', 'stress or anxiety', 'fermented and pickled foods', 'cured meats and aged cheeses', 'certain fruits, including bananas, avocados, and citrus', 'skipped meals', 'too little or too much sleep', 'bright or strong lights', 'alcohol consumption', 'caffeine withdrawal']
                            },
                            {
                                point: 'Because some non-migraine headaches can be severe, it can be difficult to tell the difference between the two. Learn more about the differences between migraines and other headache types.',
                                these_include: ['']
                            }

                        ]
                    }
                ]
            }
        ],
        after_treatment_section: 'You can discuss with your doctor on which specific treatment would be best for relieving your headaches.'
    }
]