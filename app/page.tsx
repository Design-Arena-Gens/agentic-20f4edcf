"use client";
import { useState } from 'react';

export default function Page() {
  const [barked, setBarked] = useState(false);
  const [running, setRunning] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function onBark() {
    if (disabled) return;
    setDisabled(true);
    setBarked(true);
    setTimeout(() => {
      setRunning(true);
    }, 250);
    setTimeout(() => {
      setBarked(false);
    }, 900);
    setTimeout(() => {
      setDisabled(false);
    }, 1400);
  }

  function resetScene() {
    setBarked(false);
    setRunning(false);
    setDisabled(false);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div>
            <div className="title">Dog vs Lion</div>
            <div className="subtitle">Make a dog bark; the lion gets scared and runs away.</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="button" onClick={onBark} disabled={disabled}>Bark!</button>
            <button className="button" onClick={resetScene}>Reset</button>
          </div>
        </div>

        <div className="scene">
          <div className={`bark ${barked ? 'show' : ''}`}>WOOF! WOOF!</div>
          <Dog className={`character dog ${barked ? 'shake' : ''}`} />
          <Lion className={`character lion ${running ? 'run' : ''}`} />
          <div className="ground" />
          <div className="sun" />
        </div>

        <div className="footer">Made with Next.js · Have fun!</div>
      </div>
    </div>
  );
}

function Dog({ className }: { className?: string }) {
  return (
    <svg className={className} width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="dog">
      <rect x="10" y="50" width="80" height="40" rx="12" fill="#a16207"/>
      <circle cx="90" cy="60" r="18" fill="#a16207"/>
      <circle cx="102" cy="58" r="7" fill="#78350f"/>
      <circle cx="98" cy="56" r="3" fill="#0f172a"/>
      <rect x="2" y="60" width="16" height="10" fill="#374151"/>
      <rect x="86" y="88" width="12" height="16" fill="#78350f"/>
      <rect x="30" y="88" width="12" height="16" fill="#78350f"/>
      <rect x="60" y="88" width="12" height="16" fill="#78350f"/>
      <path d="M 16 52 Q 10 40 20 34 Q 36 42 32 54" fill="#a16207"/>
      <path d="M 26 52 Q 20 40 30 34 Q 46 42 42 54" fill="#a16207"/>
      <path d="M 92 66 q 12 4 12 10 q -12 4 -12 -10 z" fill="#fbbf24"/>
    </svg>
  );
}

function Lion({ className }: { className?: string }) {
  return (
    <svg className={className} width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="lion">
      <rect x="20" y="50" width="100" height="40" rx="12" fill="#d97706"/>
      <circle cx="20" cy="70" r="20" fill="#b45309"/>
      <circle cx="20" cy="64" r="6" fill="#0f172a"/>
      <circle cx="14" cy="64" r="2" fill="#fff"/>
      <rect x="62" y="88" width="12" height="16" fill="#b45309"/>
      <rect x="92" y="88" width="12" height="16" fill="#b45309"/>
      <rect x="122" y="88" width="12" height="16" fill="#b45309"/>
      <path d="M 6 80 q 10 6 28 6 q -10 10 -28 -6 z" fill="#f59e0b"/>
      <path d="M 8 68 q 8 2 12 -4 q 8 6 0 12 q -12 2 -12 -8 z" fill="#fde68a"/>
    </svg>
  );
}
