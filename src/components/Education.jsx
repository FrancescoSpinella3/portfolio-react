function Education() {
    return (
        <div className="education bg-[#1b1b1b] flex flex-col justify-start p-14 text-white w-5xl mx-auto rounded-md">
            <h3 className="font-bold text-4xl flex gap-5 items-center pb-8 border-b border-zinc-800">
                Formazione
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            </h3>

            <div className="education flex gap-48 py-7 border-b border-zinc-800">
                <p className="text-gray-300">Ott 2022 - Nov 2025</p>
                <div>
                    <p className="text-2xl font-semibold">Laurea in Informatica per le aziende digitali</p>
                    <p className="text-gray-300">Università telematica Pegaso, <span className="text-white font-semibold">Messina</span></p>
                </div>
            </div>
            
            <div className="education flex gap-48 py-7 border-b border-zinc-800">
                <p className="text-gray-300">Ott 2021 - Gen 2022</p>
                <div>
                    <p className="text-2xl font-semibold">Graphic design & Video editing</p>
                    <p className="text-gray-300">PC Academy, <span className="text-white font-semibold">Roma</span></p>
                </div>
            </div>

            <div className="education flex gap-48 py-7 pb-0">
                <p className="text-gray-300">Sett 2014 - Giu 2019</p>
                <div>
                    <p className="text-2xl font-semibold">Amministrazione finanza e marketing</p>
                    <p className="text-gray-300">IIS Borghese Faranda, <span className="text-white font-semibold">Patti (ME)</span></p>
                </div>
            </div>
        </div>
    );
}

export default Education;