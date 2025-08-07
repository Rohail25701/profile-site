// Particles (Stars or Floating Circles)
const particleGeometry = new THREE.SphereGeometry(0.03, 8, 8);
const particleMaterial = new THREE.MeshStandardMaterial({ color: 0xadd8e6 }); // light blue

for (let i = 0; i < 200; i++) {
  const particle = new THREE.Mesh(particleGeometry, particleMaterial);
  particle.position.x = (Math.random() - 0.5) * 20;
  particle.position.y = (Math.random() - 0.5) * 20;
  particle.position.z = (Math.random() - 0.5) * 20;
  scene.add(particle);
}