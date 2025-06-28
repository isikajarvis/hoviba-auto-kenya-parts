
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle } from 'lucide-react';

const CompatibilityChecker = () => {
  const [selectedVehicle, setSelectedVehicle] = useState({
    make: '',
    model: '',
    year: ''
  });
  const [compatibility, setCompatibility] = useState<'compatible' | 'incompatible' | null>(null);

  const carMakes = ['Toyota', 'Nissan', 'Mazda', 'Mitsubishi', 'Honda', 'Suzuki'];
  const carModels = ['Corolla', 'Camry', 'Vitz', 'Probox', 'Fielder', 'Axio'];
  const years = Array.from({ length: 25 }, (_, i) => String(2024 - i));

  const checkCompatibility = () => {
    // Simulate compatibility check - in real app, this would call an API
    const isCompatible = Math.random() > 0.3; // 70% chance of compatibility
    setCompatibility(isCompatible ? 'compatible' : 'incompatible');
  };

  const isFormComplete = selectedVehicle.make && selectedVehicle.model && selectedVehicle.year;

  return (
    <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Check Parts Compatibility</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <Label htmlFor="compat-make">Vehicle Make</Label>
          <Select onValueChange={(value) => setSelectedVehicle(prev => ({ ...prev, make: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              {carMakes.map(make => (
                <SelectItem key={make} value={make}>{make}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="compat-model">Vehicle Model</Label>
          <Select onValueChange={(value) => setSelectedVehicle(prev => ({ ...prev, model: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {carModels.map(model => (
                <SelectItem key={model} value={model}>{model}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="compat-year">Year</Label>
          <Select onValueChange={(value) => setSelectedVehicle(prev => ({ ...prev, year: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <Button 
          onClick={checkCompatibility}
          disabled={!isFormComplete}
          className="bg-red-600 hover:bg-red-700"
        >
          Check Compatibility
        </Button>
        
        {compatibility && (
          <div className={`flex items-center space-x-2 ${
            compatibility === 'compatible' ? 'text-green-600' : 'text-red-600'
          }`}>
            {compatibility === 'compatible' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <span className="font-medium">
              {compatibility === 'compatible' 
                ? 'Compatible with your vehicle' 
                : 'Not compatible with your vehicle'
              }
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompatibilityChecker;
