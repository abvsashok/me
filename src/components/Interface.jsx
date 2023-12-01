import { motion } from "framer-motion";

const Section = ({ children }) => {

    return <motion.section className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto 
    flex flex-col items-start justify-center`}
        initial={{
            opacity: 0,
            y: 50
        }}
        whileInView={{
            opacity: 1,
            y: 1,
            transition: {
                duration: 1,
                delay: 0.6
            }

        }}

    >{children}</motion.section>
}

export const Interface = () => {


    return <div className={"flex flex-col items-center w-screen"}>
        <AboutSection />
        <Section>
            <h1>Abount</h1>
        </Section>

        <SkillSection />

        <Section>
            <h1>Abount</h1>
        </Section>

    </div>
}

const AboutSection = () => {

    return <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
            Hi, I'm
            <br />
            <span className="bg-white px-1 italic">Ashok Kumar</span>
            <p className="text-lg text-gray-600 mt-4">
                Am a FullStack Softeare Developer
            </p>
            <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
                Contact me
            </button>
        </h1>
    </Section>
}

const ContactSection = () => {

}
const SkillSection = () => {
    const skills = [
        { title: 'Skill 1', level: 40 },
        { title: 'Skill 1', level: 10 }, { title: 'Skill 1', level: 70 },
        { title: 'Skill 1', level: 40 }
    ];

    return <>
        <div>
            <h2 className="text-5xl font-bold"> Skills</h2>
            <div className="mt-8 space-y-4">
                {skills?.map((skill, index) => (<>
                    <div className="w-64" key={index}>
                        <h3 className="text-xl font-bold text-gray-800">Skill name</h3>
                        <div className="h-2 w-full bg-gray-200 rounded-full m-2">
                            <div className="h-full bg-indigo-50 rounded-full" style={{ width: '30%' }}>

                            </div>
                        </div>
                    </div></>))}
            </div>
        </div>
    </>
}