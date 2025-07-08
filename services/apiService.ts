import type { Equipment, EquipmentFormData } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

export class ApiService {
  // Equipment operations
  static async getAllEquipment(): Promise<Equipment[]> {
    const response = await fetch(`${API_BASE_URL}/equipment`);
    if (!response.ok) {
      throw new Error('Failed to fetch equipment');
    }
    return response.json();
  }

  static async addEquipment(equipmentData: EquipmentFormData): Promise<Equipment> {
    const response = await fetch(`${API_BASE_URL}/equipment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(equipmentData),
    });
    if (!response.ok) {
      throw new Error('Failed to add equipment');
    }
    return response.json();
  }

  static async updateEquipment(id: number, updates: Partial<Equipment>): Promise<Equipment> {
    const response = await fetch(`${API_BASE_URL}/equipment/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error('Failed to update equipment');
    }
    return response.json();
  }

  static async deleteEquipment(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/equipment/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete equipment');
    }
  }

  // Lookup data operations
  static async getManufacturers() {
    const response = await fetch(`${API_BASE_URL}/manufacturers`);
    if (!response.ok) {
      throw new Error('Failed to fetch manufacturers');
    }
    return response.json();
  }

  static async getEquipmentTypes() {
    const response = await fetch(`${API_BASE_URL}/equipment-types`);
    if (!response.ok) {
      throw new Error('Failed to fetch equipment types');
    }
    return response.json();
  }

  static async getBuildings() {
    const response = await fetch(`${API_BASE_URL}/buildings`);
    if (!response.ok) {
      throw new Error('Failed to fetch buildings');
    }
    return response.json();
  }

  static async getDepartments() {
    const response = await fetch(`${API_BASE_URL}/departments`);
    if (!response.ok) {
      throw new Error('Failed to fetch departments');
    }
    return response.json();
  }

  static async getRooms() {
    const response = await fetch(`${API_BASE_URL}/rooms`);
    if (!response.ok) {
      throw new Error('Failed to fetch rooms');
    }
    return response.json();
  }

  static async getFundingSources() {
    const response = await fetch(`${API_BASE_URL}/funding-sources`);
    if (!response.ok) {
      throw new Error('Failed to fetch funding sources');
    }
    return response.json();
  }
}