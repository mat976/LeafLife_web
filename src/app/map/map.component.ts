import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const map = L.map('map').setView([48.8566, 2.3522], 2);

    // Ajout des tuiles (tiles) OpenStreetMap à la carte Leaflet
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Récupération des données GeoJSON depuis l'API
    this.http.get<any>('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
      .subscribe(data => {
        console.log(data);
        // Dessin de la carte
        const features = data.features;
        features.forEach((feature: any) => {
          const lat = feature.geometry.coordinates[1];
          const lng = feature.geometry.coordinates[0];
          const mag = feature.properties.mag;

          // Dessin du cercle sur la carte
          L.circle([lat, lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: mag * 10000
          }).addTo(map);
        });
      });
  }
}
