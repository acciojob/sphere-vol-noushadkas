function volume_sphere() {
    let rad = document.getElementById("radius").value;
	 let result = 4/3 * Math.PI * Math.pow(rad,3);
	result = result.toFixed(4);
	 let vol = document.getElementById("volume");
    vol.value = result;
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;