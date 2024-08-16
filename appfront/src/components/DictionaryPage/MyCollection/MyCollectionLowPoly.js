import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './styles/MyCollectionLowPoly.css';

const MyCollectionLowPoly = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountElement = mountRef.current;

    // 씬 생성
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // 카메라 설정
    const camera = new THREE.PerspectiveCamera(60, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // 렌더러 설정
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    mountElement.appendChild(renderer.domElement);

    // 조명 추가
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    scene.add(light);

    // GLTFLoader를 사용하여 .glb 파일 로드
    const loader = new GLTFLoader();
    loader.load('./lowpoly/plantb_land.glb', (gltf) => {
      const land = gltf.scene;

      // 노드별로 색상을 지정하며 재질 속성 조정
      land.traverse((node) => {
        if (node.isMesh) {
          if (node.name.includes('bottomlayer')) {
            node.material = new THREE.MeshStandardMaterial({
              color: 0xD1CFA6, // 갈색
              roughness: 1, // 반사광을 거의 없애도록 설정
              metalness: 0, // 금속성 없음
            });
          } else if (node.name.includes('toplayer')) {
            node.material = new THREE.MeshStandardMaterial({
              color: 0xB7D960, // 초록색
              roughness: 1, // 반사광을 거의 없애도록 설정
              metalness: 0, // 금속성 없음
            });
          }
        }
      });

      land.scale.set(0.8, 0.8, 0.8);
      scene.add(land);

      // 땅 회전
      const animate = () => {
        requestAnimationFrame(animate);
        land.rotation.y += 0.002;
        renderer.render(scene, camera);
      };
      animate();
    });

    // OrbitControls 추가
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 20;

    // 리사이즈 핸들러
    const handleResize = () => {
      const width = mountElement.clientWidth;
      const height = mountElement.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 unmount될 때 리소스 정리
    return () => {
      mountElement.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} className="collectionlowpoly-container"></div>;
};

export default MyCollectionLowPoly;
