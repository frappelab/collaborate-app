import { Component, inject, signal } from '@angular/core';
import { Session } from '../../../../shared/services/session';
import { ProjectsService } from '../../services/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  private readonly _projectsService = inject(ProjectsService);
  private readonly _sessionService = inject(Session);

  projectsData = signal<any[]>([]);

  token: string | null = '';

  projects() {
    this._projectsService.getProjects().subscribe({
      next: (data: any) => {
        console.log(data);
        this.projectsData.set(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}