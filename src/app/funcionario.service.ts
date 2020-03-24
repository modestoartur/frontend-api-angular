import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FuncionarioService {
  private baseUrl = "http://localhost:8080/backend/api/v1/funcionarios/";

  constructor(private http: HttpClient) {}

  getFuncionario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFuncionario(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateFuncionario(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getFuncionariosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
