
export default function Footer(){
    return (
        <footer className="bg-[var(--bg-soft)] text-center py-4 mt-8">
            <p className="text-sm text-[var(--text-outside)]">
                &copy; {new Date().getFullYear()} Recetas. Todos los derechos reservados.
            </p>
        </footer>
    )
}