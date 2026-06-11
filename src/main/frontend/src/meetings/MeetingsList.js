export default function MeetingsList({meetings, username, onDelete, onSignIn, onSignOut}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => {
                    const isSignedUp = meeting.participants?.some(p => p.login === username);
                    return (
                        <tr key={index}>
                        <td>{meeting.title}</td>
                        <td>{meeting.description}</td>
                        <td>
                            {meeting.participants && meeting.participants.length > 0 ? (
                                <ul>
                                    {meeting.participants.map(p => (
                                        <li key={p.login}>{p.login}</li>
                                    ))}
                                </ul>
                            ) : (
                                <em>Brak zapisanych uczestników</em>
                            )}
                        </td>
                        <td>
                            {isSignedUp ? (
                                <button type="button" className="button button-outline" onClick={() => onSignOut(meeting)}>Wypisz się</button>
                            ) : (
                                <button type="button" className="button" onClick={() => onSignIn(meeting)}>Zapisz się</button>
                            )}
                            <button type="button" className="button button-clear" disabled={meeting.participants && meeting.participants.length > 0}
                                onClick={() => onDelete(meeting)}
                                style={{ marginLeft: '10px' }}>Usuń</button>
                        </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
