// Create a Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Create a 3D model (you can replace this with your own model)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Function to update the texture with the uploaded image
function updateTexture(image) {
    const texture = new THREE.Texture(image);
    texture.needsUpdate = true;
    material.map = texture;
}

// Handle file upload event
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', (event) => {
    const reader = new FileReader();
    reader.onload = () => {
        const image = new Image();
        image.onload = () => {
            updateTexture(image);
        };
        image.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();