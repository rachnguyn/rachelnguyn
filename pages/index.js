import Head from 'next/head'

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
      </footer>

<style jsx>{`

.link{
  color: #9626ff;
  display: inline-block;
  justify-content: left;
  align-items: left;
}
.text-right{
  text-align: right;
  float: right;
}
h5{
  color: #c2c2c2;
}

.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

main {
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

footer {
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer img {
  margin-left: 0.5rem;
}

footer a {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  line-height: 1.5;
  font-size: 1.5rem;
}

code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: left;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
}

.card {
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid #000000;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.card:hover,
.card:focus,
.card:active {
  color: #ffffff;
  border-color: #ffffff;
}

.card{
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
`}</style>

<style jsx global>{`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

* {
  box-sizing: border-box;
}
`}</style>
</div>

  )
}
