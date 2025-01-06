

export default function Page() {
    return <div className={"ascii-art"}>
        <pre>      _____         __             __ </pre>
        <pre>     / ___/  ____ _/ /_____  ___ _/ /_ </pre>
        <pre>    / / __ \/ __ \  __/ __ \/ __/  __/</pre>
        <pre>   / / /_/ / / / / / / /_/ / /__/ /</pre>
        <pre>   \ \____/_/ /_/ /_/_/ /_/\___/ /_</pre>
        <pre>    \____/      \__/           \__/</pre>
        <div>
            <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <textarea name="message" placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        <div className={"reseaux"}>
            <a href="https://github.com/IsaacDuflos">GitHub</a>
            <a href="https://www.linkedin.com/in/maxime-lecocq-7b1a9b1a6/">LinkedIn</a>
        </div>


    </div>


}