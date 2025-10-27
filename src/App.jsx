import { useEffect, useRef, useState } from 'react';
import './App.css';
import NavBar from './companents/NavBar';
import { FaDownload } from 'react-icons/fa';

function App() {
  const handleDownload = () => {
    const fileUrl = '/files/Resume.pdf';
    const fileName = 'Resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  // === Settings ===
  const DURATION = 450000; 
  const [display, setDisplay] = useState(''); // visible typed text
  const containerRef = useRef(null);

  // Build a long fake script (no green, only white text and red prompt)
  const bigScript = (() => {
    const seeds = [
      "Initializing kernel modules...",
      "Mounting virtual FS: /mnt/secure",
      "Checking firewall ruleset...",
      "Bypassing WAF signature database...",
      "Allocating stealth channel 0xA9F2...",
      "Injecting dynamic payload: shadow_streamer",
      "Compiling runtime hook modules...",
      "Hook installed: net.recv -> proxy.capture",
      "Enumerating open ports...",
      "Found service: httpd/2.4.51 (fakecorp)",
      "Exploit chain: CVE-2021-44228 -> chainlink-0",
      "Creating ephemeral tunnel to 45.77.12.9:4443",
      "Encrypting transfer with custom AES-XG",
      "Chunk uploaded: 001/1024",
      "Chunk uploaded: 002/1024",
      "Adaptive resend triggered: packet loss detected",
      "Fallback vector engaged: silent-latch",
      "Privilege escalation: kernel-sched overwrite",
      "Escalation OK. uid=0 (root)",
      "Searching for credentials... pattern: *pass* *pwd*",
      "Found credential: admin:•••••••• (obfuscated)",
      "Extracting /etc/shadow entries... 12 hits",
      "Archiving discovered artifacts...",
      "Packing logs into /tmp/collected-<ts>.tar.gz",
      "Wiping trace: shred /var/log/auth.log",
      "Deleting history: ~/.bash_history",
      "Scheduling cron cleanup at 03:00 UTC",
      "Process hollowing complete. PID 4421 replaced",
      "Switching to low-entropy exfil channel",
      "Upload speed: adaptive (avg 128kb/s)",
      "Handshake reestablished. Session stable.",
      "Simulating user input to avoid timeout",
      "Injecting CSS-based beacon into webapp",
      "Beacon check-in: OK",
      "Remote command exec: ls -la /root/secure",
      "Reading file: /root/secure/finance-reports.xlsx (2.1MB)",
      "Streaming to node: relay-07.fake-net:9001",
      "Monitoring IDS signatures... none matched",
      "Polymorphic payload variant: v3.7",
      "Attempting lateral move to 192.168.0.45...",
      "Connection to 192.168.0.45 established.",
      "Dropping loader: /tmp/.init-<random>",
      "Loader executed. Beaconing every 30s",
      "Compromised hosts: 12 (incl. controller nodes)",
      "Recon complete. Mapping internal topology...",
      "Generating human-like activity logs to blend in",
      "Maintaining persistence via /etc/cron.d/updates",
      "Status: Stealth high, risk moderate",
      "Mission flag: extract minimal but crucial data",
      "Cleaning caches and temporary files",
      "Session will auto-terminate on completion",
      "== RESPONSE BLOCK BEGIN ==",
      "HTTP/1.1 200 OK",
      "Server: fakecorp/2.4.1",
      "Content-Type: application/octet-stream",
      "Content-Length: 2147483",
      "== RESPONSE BLOCK END ==",
      "Operation summary: artifacts: 34 files, 9 dirs",
      "Exfil channel closed gracefully.",
      "System log wipe confirmed.",
      "> Mission status: Completed (undetected)",
      "Timestamp: " + new Date().toISOString()
    ];

    // Repeat and inject small random variations to enlarge text
    let out = '';
    for (let r = 0; r < 28; r++) { // repetition count tuned to reach ~3 minutes
      for (let i = 0; i < seeds.length; i++) {
        const s = seeds[i];
        const rnd = Math.random();
        let line = s;
        if (rnd > 0.88) line += ` // rnd:${Math.floor(Math.random()*9999)}`;
        if (rnd > 0.97) line = `[warning] ${line}`;
        out += line + '\n';
      }
      out += `> local_log ${r}.log: size=${Math.floor(Math.random()*9000)+100}KB\n`;
    }
    return out;
  })();
const [typingSpeed, setTypingSpeed] = useState(60); // default 60ms per char

  // typing engine using requestAnimationFrame to spread typing across DURATION
  useEffect(() => {
    const totalChars = bigScript.length;
    if (totalChars === 0) return;
     
    const msPerChar = DURATION / totalChars;
    let charIndex = 0;

    const startRef = { current: performance.now() };
    let rafId = null;
    let lastTime = performance.now();

    function step(now) {
      const dt = now - lastTime;
      lastTime = now;
      // how many chars to advance this frame
      const advance = Math.max(0, Math.floor(dt / msPerChar));
      if (advance > 0) {
        charIndex = Math.min(totalChars, charIndex + advance);
        setDisplay(bigScript.slice(0, charIndex));
        // auto-scroll
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }
      // stop conditions
      if (charIndex < totalChars && (now - startRef.current) < DURATION + 1000) {
        rafId = requestAnimationFrame(step);
      } else {
        // finish
        setDisplay(bigScript); // ensure full text visible
        if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
        cancelAnimationFrame(rafId);
      }
    }

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // styles — ensure no green used, only red and white
  const terminalStyle = {
    width: '700px',
    height: '400px',
    backgroundColor: '#050505',
    color: '#ffffff',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
    fontSize: '13px',
    border: '2px solid #ffffffff', // red border
    padding: '12px',
    overflowY: 'auto',
    borderRadius: '8px',
    marginTop: '150px',
    boxShadow: '0 0 18px rgba(255,38,54,0.18)',
    whiteSpace: 'pre-wrap',
    lineHeight: 1.45,
  };

  const promptStyle = {
    color: '#ffffffff', // red prompt
    fontWeight: 700,
  };

  const typedStyle = {
    color: '#ffffff', // main text white
  };

  return (
    <>
      <div className="Page">
        <header className="Hamburger">
          <div className="container">
            <div className="row" style={{ alignItems: 'flex-start' }}>
              {/* Left user info */}
              <div className="col-lg-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="300"
                  className="texts"
                >
                  <h1
                    style={{
                      color: '#ffffffff',
                      fontSize: '22px',
                      marginBottom: '20px',
                      textShadow: '0 0 6px #fff, 0 0 12px rgba(255,38,54,0.08)',
                    }}
                  >
                    [ User Info ]
                  </h1>

                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>username:</span> TheDeep</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>fullname:</span> Sardor Shoakbarov</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>role:</span> Software Engineer / Ethical Hacker</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>status:</span> Signal Lost</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>location:</span> Undetected</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>threat level:</span> Medium</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>mission:</span> Undetected</p>
                  <p><span style={{ fontWeight: '700', minWidth: '140px' }}>Data:</span> Available to Download</p>
                  <button onClick={handleDownload} className="ResumeBtn" style={{ marginTop: 8 }}>
                    <p>Data Available <FaDownload /></p>
                  </button>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="600"
                className="col-lg-6"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
              >
                <div ref={containerRef} style={terminalStyle} aria-live="polite">
                  {/* Render: add red prompt '>' at start of each line */}
                  {display.split('\n').map((line, idx) => {
                    if (line.trim() === '') return <div key={idx}>&nbsp;</div>;
                    // show prompt red only for lines that look like commands or starts with >
                    const isPrompt = line.startsWith('>') || line.startsWith('[+]') || line.startsWith('[!]') || line.startsWith('[warning]');
                    return (
                      <div key={idx}>
                        <span style={promptStyle}>&gt; </span>
                        <span style={typedStyle}>{line}</span>
                      </div>
                    );
                  })}
                  {/* blinking cursor at end */}
                  <div>
                    <span style={promptStyle}>&gt; </span>
                    <span style={{ ...typedStyle, opacity: 1 }}>&nbsp;</span>
                    <span style={{
                      color: '#ffffffff',
                      display: 'inline-block',
                      width: 10,
                      marginLeft: 6,
                      animation: 'blink 1s steps(2) infinite'
                    }}>█</span>
                  </div>

                  <style>{`
                    @keyframes blink {
                      0% { opacity: 1; }
                      50% { opacity: 0; }
                      100% { opacity: 1; }
                    }
                  `}</style>
                </div>
              </div>

            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
