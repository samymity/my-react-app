/**
 * Header Component
 *
 * Renders the top banner of the Brick World application.
 * Displays the application title centered on a red background (#d32f2f).
 *
 * @returns {JSX.Element} A full-width header element with the app title.
 */
export function Header() {
    return (
        <header style={{ background: '#d32f2f', color: 'white', padding: '1rem 2rem', width: '100%', boxSizing: 'border-box' }}>
            <h1 style={{ margin: 0, textAlign: 'center' }}>Incident-Managemet-System </h1>
        </header>
    );
}