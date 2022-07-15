import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrescriptionDetails } from './prescription-details';
import { SubscriptionDetails } from './subscription-details';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  //baseUrl: string = 'http://localhost:8082/subscriptionapi'
  //baseUrl:string='http://ec2-65-2-39-167.ap-south-1.compute.amazonaws.com:8082/subscriptionapi'
  baseUrl:string='http://ec2-13-233-165-189.ap-south-1.compute.amazonaws.com:8082/subscriptionapi'

  getAllSubscriptions(mId: string) {
    let token=localStorage.getItem("token")
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };
    return this.http.get<SubscriptionDetails[]>(`${this.baseUrl}/getAllSubscriptions/${mId}`, header);
  }

  unsubscribe(mId: string, sId: number) {
    let token=localStorage.getItem("token")
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };
    console.log(sId)
    return this.http.post(`${this.baseUrl}/unsubscribe/${mId}/${sId}`,null,header)

    
  }

  savePrescription(prescriptionDetails: PrescriptionDetails){
    let token=localStorage.getItem("token")
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };
    console.log(prescriptionDetails)
    return this.http.post<string>(`${this.baseUrl}/subscribe`,prescriptionDetails,header);
  }

}
