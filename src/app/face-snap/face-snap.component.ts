import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  buttonText2!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {

  }

  ngOnInit(): void {
      this.buttonText = 'Oh Snap!';
      this.buttonText2 = 'Bouh!'
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onDislike() {
    if (this.buttonText2 === 'Bouh!') {
      this.faceSnap.dislikes++;
      this.buttonText2 = 'Oops, unBouh!';
    } else {
      this.faceSnap.dislikes--;
      this.buttonText2 = 'Bouh!';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
