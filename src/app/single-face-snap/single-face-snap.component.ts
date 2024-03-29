import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;
  buttonText2!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.buttonText = 'Oh Snap!';
      this.buttonText2 = 'Bouh!';
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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

}
