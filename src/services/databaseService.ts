interface Incident {
  name: string;
  level: string;
  description: string;
  date: string;
}

export class DatabaseService {
  private incidents: Incident[] = [];

  addIncident(incident: Incident): void {
    this.incidents.push(incident);
  }

  getAllIncidents(): Incident[] {
    return this.incidents;
  }
}
