import './statistics.css'

export function TaskStatistics({ total, pending, completed }) {
    return (
        <section className="statistics">
            <h2>Estadísticas</h2>

            <div className="statisticsGrid">
                <div className="statCard">
                    <span className="statNumber">{total}</span>
                    <span className="statLabel">Total</span>
                </div>

                <div className="statCard">
                    <span className="statNumber">{pending}</span>
                    <span className="statLabel">Pendientes</span>
                </div>

                <div className="statCard">
                    <span className="statNumber">{completed}</span>
                    <span className="statLabel">Completadas</span>
                </div>
            </div>
        </section>
    );
}
