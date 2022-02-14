import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
    <Head>
      <title>rachelnguyn</title>
      <link rel="icon" href="/pinkicon.png" />
    </Head>

    <main>
      <div className="grid card text-center">
        <h3>
          Rachel Nguyen is a Vietnamese-American software developer, designer, and student at UCLA. 
          Her passion for education, humanitarianism, and culture inspire her work
          to be continuously inclusive, conscious, and impactful. She also enjoys gaming 
          and exploring new foods. &nbsp; 
        </h3>
        <p>
        <a rel="noreferrer" href="mailto: rachelnguyn@gmail.com" target="_blank">
            <p className="link">email  &rarr;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </a>
        <a rel="noreferrer" href="https://github.com/rachnguyn" target="_blank">
            <p className="link">github &rarr;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </a>
        <a rel="noreferrer" href="/resume" target="_blank">
            <p className="link">resume &rarr;</p>
        </a>
        </p>
      </div>

      {/* <p className="description">

      </p> */}
      <div className="projects card">
        <h3 className="text-right">projects &darr;</h3>
    </div>
      <div className="card">
        <div className="text-right grid card">
          <h3 className="text-right">turtle mania &darr;</h3>
          <p>an interactive, 
            single-player video game that showcases collision detection, 
            shadow mapping, dynamic object instantiation, vertex and 
            pixel shading, scene graph, and mouse picking </p><br></br>
          <a rel="noreferrer" href="https://github.com/rachnguyn/turtlemania" target="_blank">
            <br></br><p className="link">explore &rarr;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </a>
          <a rel="noreferrer" href="https://rachnguyn.github.io/turtlemania/" target="_blank">
            <br></br><p className="link">play here&rarr;</p>
          </a>
        </div>

        <div className="text-right grid card">
          <h3 className="text-right">employee directory app &darr;</h3>
          <p>a full web app that allows users to view and
            manage information about their employees in one place.
          </p>
          <a rel="noreferrer" href="https://github.com/rachnguyn/dotnet/tree/main/Employee_Directory_App" target="_blank">
            <br></br><p className="link">explore &rarr;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </a>
        </div>

        <div className=" text-right grid card">
          <h3 className="text-right">to-do app &darr;</h3>
          <p>
            a task-management web app that allows
            users to create and edit a list of tasks, that of which 
            are stored and pulled from a database using dynamic API requests.
          </p>
          <a rel="noreferrer" href="https://github.com/rachnguyn/dotnet/tree/main/To_Do_App" target="_blank">
            <br></br><p className="link">explore &rarr;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </a>
        </div>
      </div>
    </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
