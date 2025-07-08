import express from 'express';
import cors from 'cors';
import { pool } from './database.js';
import { DatabaseService } from './databaseService.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Equipment routes
app.get('/api/equipment', async (req, res) => {
  try {
    const equipment = await DatabaseService.getAllEquipment();
    res.json(equipment);
  } catch (error) {
    console.error('Error fetching equipment:', error);
    res.status(500).json({ error: 'Failed to fetch equipment' });
  }
});

app.post('/api/equipment', async (req, res) => {
  try {
    const newEquipment = await DatabaseService.addEquipment(req.body);
    res.status(201).json(newEquipment);
  } catch (error) {
    console.error('Error adding equipment:', error);
    res.status(500).json({ error: 'Failed to add equipment' });
  }
});

app.put('/api/equipment/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedEquipment = await DatabaseService.updateEquipment(id, req.body);
    res.json(updatedEquipment);
  } catch (error) {
    console.error('Error updating equipment:', error);
    res.status(500).json({ error: 'Failed to update equipment' });
  }
});

app.delete('/api/equipment/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await DatabaseService.deleteEquipment(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting equipment:', error);
    res.status(500).json({ error: 'Failed to delete equipment' });
  }
});

// Lookup data routes
app.get('/api/manufacturers', async (req, res) => {
  try {
    const manufacturers = await DatabaseService.getManufacturers();
    res.json(manufacturers);
  } catch (error) {
    console.error('Error fetching manufacturers:', error);
    res.status(500).json({ error: 'Failed to fetch manufacturers' });
  }
});

app.get('/api/equipment-types', async (req, res) => {
  try {
    const types = await DatabaseService.getEquipmentTypes();
    res.json(types);
  } catch (error) {
    console.error('Error fetching equipment types:', error);
    res.status(500).json({ error: 'Failed to fetch equipment types' });
  }
});

app.get('/api/buildings', async (req, res) => {
  try {
    const buildings = await DatabaseService.getBuildings();
    res.json(buildings);
  } catch (error) {
    console.error('Error fetching buildings:', error);
    res.status(500).json({ error: 'Failed to fetch buildings' });
  }
});

app.get('/api/departments', async (req, res) => {
  try {
    const departments = await DatabaseService.getDepartments();
    res.json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

app.get('/api/rooms', async (req, res) => {
  try {
    const rooms = await DatabaseService.getRooms();
    res.json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

app.get('/api/funding-sources', async (req, res) => {
  try {
    const fundingSources = await DatabaseService.getFundingSources();
    res.json(fundingSources);
  } catch (error) {
    console.error('Error fetching funding sources:', error);
    res.status(500).json({ error: 'Failed to fetch funding sources' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});