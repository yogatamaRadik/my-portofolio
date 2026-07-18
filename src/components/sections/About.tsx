export function About () {
    return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            About
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Final-Year Mechatronics Engineering Student (D3) at Politek8nik ATMI Surakarta, with hands-on experience across CNC Machining,
            Industrial Automation, and PLC Programming. My work has spanned real engineering problems, from wiring and testing devices, configuring
            CNC Controllers, to designing a full CNC Machine as my Final Years Project (Capstone Project). Alongside my mechatronics background, I'm expanding into modern software development,
            into modern software development, building this very website as part of that journey. Excited about solving real, and hands-on problems. Always looking for the next thing to learn!
        </p>
        <a
        href="/Curiculuum Vitae.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
            My Resume
        </a>
    </section>
    );
}