/*==================== MENU SHOW / HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
if (navClose)  navClose.addEventListener('click',  () => navMenu.classList.remove('show-menu'))

const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n => n.addEventListener('click', () => navMenu.classList.remove('show-menu')))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader  = document.querySelectorAll('.skills__header')

function toggleSkills() {
    const itemClass = this.parentNode.className
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tc => tc.classList.remove('qualification__active'))
        target.classList.add('qualification__active')
        tabs.forEach(t => t.classList.remove('qualification__active'))
        tab.classList.add('qualification__active')
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop    = current.offsetTop - 50
        const sectionId     = current.getAttribute('id')
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) link.classList.add('active-link')
            else link.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollup() {
    const el = document.getElementById('scroll-up')
    if (this.scrollY >= 560) el.classList.add('show-scroll')
    else el.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK / LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const lightTheme  = 'light-theme'
const iconMoon    = 'uil-moon'
const iconSun     = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
if (selectedTheme === 'light') {
    document.body.classList.add(lightTheme)
    themeButton.classList.remove(iconMoon)
    themeButton.classList.add(iconSun)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    const isLight = document.body.classList.contains(lightTheme)
    themeButton.classList.toggle(iconMoon, !isLight)
    themeButton.classList.toggle(iconSun,  isLight)
    localStorage.setItem('selected-theme', isLight ? 'light' : 'dark')
})

/*==================== AOS ====================*/
AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-out-cubic' })

/*==================== TYPED JS ====================*/
new Typed('.typed-text', {
    strings: ["👋🏻 Hi, I'm Hamza", "I'm a Data & ML Engineer", "I build data pipelines 🔧", "I build AI systems 🤖"],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 2200,
    loop: true
})

/*==================== THREE.JS HERO NEURAL NETWORK ====================*/
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas')
    if (!canvas || typeof THREE === 'undefined') return

    const W = () => window.innerWidth
    const H = () => window.innerHeight

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setSize(W(), H())
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 1000)
    camera.position.z = 12

    const N   = window.innerWidth < 768 ? 55 : 100
    const pos = new Float32Array(N * 3)
    const vel = []

    for (let i = 0; i < N; i++) {
        pos[i*3]   = (Math.random() - 0.5) * 36
        pos[i*3+1] = (Math.random() - 0.5) * 22
        pos[i*3+2] = (Math.random() - 0.5) * 6
        vel.push({ x: (Math.random() - 0.5) * 0.018, y: (Math.random() - 0.5) * 0.018 })
    }

    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x3f77b4, size: 0.14, transparent: true, opacity: 0.85 })))

    const MAX_L = 350
    const lPos  = new Float32Array(MAX_L * 6)
    const lGeo  = new THREE.BufferGeometry()
    lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3))
    lGeo.setDrawRange(0, 0)
    scene.add(new THREE.LineSegments(lGeo, new THREE.LineBasicMaterial({ color: 0x3f77b4, transparent: true, opacity: 0.12 })))

    // Dim purple secondary nodes
    const N2 = Math.floor(N * 0.3)
    const pos2 = new Float32Array(N2 * 3)
    for (let i = 0; i < N2; i++) {
        pos2[i*3] = (Math.random() - 0.5) * 36
        pos2[i*3+1] = (Math.random() - 0.5) * 22
        pos2[i*3+2] = (Math.random() - 0.5) * 4
    }
    const pGeo2 = new THREE.BufferGeometry()
    pGeo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3))
    scene.add(new THREE.Points(pGeo2, new THREE.PointsMaterial({ color: 0x818cf8, size: 0.1, transparent: true, opacity: 0.5 })))

    let mouseX = 0, mouseY = 0
    window.addEventListener('mousemove', e => {
        mouseX = (e.clientX / W() - 0.5) * 1.5
        mouseY = -(e.clientY / H() - 0.5) * 1.0
    })

    let frame = 0
    function animate() {
        requestAnimationFrame(animate)
        frame++

        for (let i = 0; i < N; i++) {
            pos[i*3]   += vel[i].x
            pos[i*3+1] += vel[i].y
            if (Math.abs(pos[i*3])   > 18) vel[i].x *= -1
            if (Math.abs(pos[i*3+1]) > 11) vel[i].y *= -1
        }
        pGeo.attributes.position.needsUpdate = true

        if (frame % 2 === 0) {
            let lc = 0
            for (let i = 0; i < N && lc < MAX_L; i++) {
                for (let j = i + 1; j < N && lc < MAX_L; j++) {
                    const dx = pos[i*3] - pos[j*3], dy = pos[i*3+1] - pos[j*3+1]
                    if (dx*dx + dy*dy < 64) {
                        lPos[lc*6]   = pos[i*3];     lPos[lc*6+1] = pos[i*3+1]; lPos[lc*6+2] = pos[i*3+2]
                        lPos[lc*6+3] = pos[j*3];     lPos[lc*6+4] = pos[j*3+1]; lPos[lc*6+5] = pos[j*3+2]
                        lc++
                    }
                }
            }
            lGeo.attributes.position.needsUpdate = true
            lGeo.setDrawRange(0, lc * 2)
        }

        camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.03
        camera.position.y += (mouseY * 0.4 - camera.position.y) * 0.03
        renderer.render(scene, camera)
    }
    animate()

    window.addEventListener('resize', () => {
        camera.aspect = W() / H()
        camera.updateProjectionMatrix()
        renderer.setSize(W(), H())
    })
}

/*==================== HORIZONTAL PROJECTS SCROLL ====================*/
function initHorizontalScroll() {
    const section = document.querySelector('.projects-section')
    const sticky  = document.querySelector('.projects-sticky')
    const track   = document.getElementById('projects-track')
    const fill    = document.querySelector('.projects-progress__fill')
    const label   = document.querySelector('.projects-progress__label')

    if (!section || !track) return

    const isDesktop = () => window.innerWidth > 900
    const navH      = () => document.getElementById('header').offsetHeight

    let scrollDist = 0

    function setup() {
        if (!isDesktop()) {
            section.style.height = ''
            track.style.transform = 'none'
            return
        }
        track.style.transform = 'translateX(0)'
        requestAnimationFrame(() => {
            const headerEl  = section.querySelector('.projects-header')
            const headerH   = headerEl ? headerEl.offsetHeight : 0
            const trackW    = track.scrollWidth
            const vw        = window.innerWidth
            scrollDist      = Math.max(0, trackW - vw + navH() * 0.5)
            section.style.height = (window.innerHeight + scrollDist + headerH) + 'px'
            sticky.style.height  = 'calc(100vh - ' + navH() + 'px)'
        })
    }

    function onScroll() {
        if (!isDesktop()) return

        const headerEl = section.querySelector('.projects-header')
        const headerH  = headerEl ? headerEl.offsetHeight : 0
        const rect     = section.getBoundingClientRect()
        // Start translating only once the sticky panel is actually in view
        // (sticky appears when rect.top reaches navH - headerH)
        const progress = -(rect.top - navH() + headerH)
        const clamped  = Math.max(0, Math.min(progress, scrollDist))

        track.style.transform = 'translateX(' + (-clamped) + 'px)'

        if (fill && label) {
            const pct = scrollDist > 0 ? (clamped / scrollDist) * 100 : 0
            fill.style.width = pct + '%'
            const total = track.querySelectorAll('.project-card:not([style*="none"])').length
            const shown = Math.round((pct / 100) * total) + 1
            label.textContent = Math.min(shown, total) + ' / ' + total
        }
    }

    // Filter buttons
    const filterBtns = document.querySelectorAll('.projects-filter__btn')
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
            const cat = btn.dataset.filter
            track.querySelectorAll('.project-card').forEach(c => {
                c.style.display = (cat === 'all' || c.dataset.category === cat) ? '' : 'none'
            })
            // Reset to first card
            track.style.transform = 'translateX(0)'
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navH()
            window.scrollTo({ top: sectionTop, behavior: 'smooth' })
            setTimeout(() => { setup(); onScroll() }, 500)
        })
    })

    setup()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => { setup(); setTimeout(onScroll, 50) })
}

/*==================== MEDIUM RSS BLOG POSTS ====================*/
async function fetchMediumPosts() {
    const container = document.getElementById('blog-posts')
    if (!container) return

    const RSS_URL   = encodeURIComponent('https://medium.com/feed/@hamza.lbelghiti')
    const API_URL   = 'https://api.rss2json.com/v1/api.json?rss_url=' + RSS_URL + '&count=3'

    function extractImage(item) {
        if (item.thumbnail && item.thumbnail.startsWith('http')) return item.thumbnail
        const match = item.content && item.content.match(/<img[^>]+src=["']([^"']+)["']/)
        return match ? match[1] : null
    }

    function extractExcerpt(html, max) {
        const d = document.createElement('div')
        d.innerHTML = html
        const txt = (d.textContent || '').replace(/\s+/g, ' ').trim()
        return txt.length > max ? txt.slice(0, max).trim() + '...' : txt
    }

    function formatDate(str) {
        const d = new Date(str)
        return isNaN(d) ? '' : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    }

    try {
        const res  = await fetch(API_URL)
        const data = await res.json()

        if (data.status !== 'ok' || !data.items || !data.items.length) throw new Error('No items')

        container.innerHTML = data.items.map((item, i) => {
            const img     = extractImage(item)
            const excerpt = extractExcerpt(item.description || item.content || '', 135)
            const date    = formatDate(item.pubDate)
            const tags    = (item.categories || []).slice(0, 4)

            return `
                <a href="${item.link}" target="_blank" rel="noopener" class="blog__card" data-aos="fade-up" data-aos-delay="${i * 120}">
                    ${img ? `<div class="blog__card-img"><img src="${img}" alt="${item.title}" loading="lazy"></div>` : ''}
                    <div class="blog__card-body">
                        <div class="blog__meta">
                            ${date ? `<span class="blog__date"><i class="uil uil-calendar-alt"></i> ${date}</span>` : ''}
                        </div>
                        <h2 class="blog__title">${item.title}</h2>
                        <p class="blog__subtitle">${excerpt}</p>
                        <div class="blog__tags">
                            ${tags.map(t => `<span class="blog__tag">${t}</span>`).join('')}
                        </div>
                    </div>
                </a>
            `
        }).join('')

    } catch {
        // Fallback static cards if API fails or is blocked
        container.innerHTML = `
            <a href="https://medium.com/@hamza.lbelghiti/data-driven-decisions-using-the-modern-data-stack-999f901da0f5" target="_blank" class="blog__card">
                <div class="blog__card-body">
                    <div class="blog__meta"><span class="blog__date"><i class="uil uil-calendar-alt"></i> Jan 15, 2024</span></div>
                    <h2 class="blog__title">Data-Driven Decisions Using the Modern Data Stack</h2>
                    <p class="blog__subtitle">Discover the Modern Data Stack tools for data-driven success — from ingestion to visualization.</p>
                    <div class="blog__tags">
                        <span class="blog__tag">Modern Data Stack</span>
                        <span class="blog__tag">Data Engineering</span>
                        <span class="blog__tag">Cloud</span>
                    </div>
                </div>
            </a>
            <a href="https://medium.com/@hamza.lbelghiti/how-openai-whisper-and-langchain-can-answer-any-question-you-have-from-a-youtube-video-278d04cc3460" target="_blank" class="blog__card">
                <div class="blog__card-body">
                    <div class="blog__meta"><span class="blog__date"><i class="uil uil-calendar-alt"></i> Nov 8, 2023</span></div>
                    <h2 class="blog__title">Extracting Information From YouTube Videos Using Whisper &amp; Langchain</h2>
                    <p class="blog__subtitle">Build a YouTube Q&amp;A app using OpenAI Whisper, Langchain, and Streamlit.</p>
                    <div class="blog__tags">
                        <span class="blog__tag">OpenAI</span>
                        <span class="blog__tag">Whisper</span>
                        <span class="blog__tag">Langchain</span>
                    </div>
                </div>
            </a>
            <a href="https://medium.com/@hamza.lbelghiti/5-ways-to-gain-real-world-project-experience-as-data-students-02260745837e" target="_blank" class="blog__card">
                <div class="blog__card-body">
                    <div class="blog__meta"><span class="blog__date"><i class="uil uil-calendar-alt"></i> Sep 3, 2023</span></div>
                    <h2 class="blog__title">5 Ways to Gain Real-World Project Experience as Data Students</h2>
                    <p class="blog__subtitle">Practical strategies to build a strong data portfolio and gain hands-on experience before your first job.</p>
                    <div class="blog__tags">
                        <span class="blog__tag">Data Science</span>
                        <span class="blog__tag">Career</span>
                        <span class="blog__tag">Students</span>
                    </div>
                </div>
            </a>
        `
    }
}

/*==================== ABOUT CANVAS — 3D DEV LAPTOP ====================*/
function initAboutCanvas() {
    const canvas = document.getElementById('about-canvas')
    if (!canvas || typeof THREE === 'undefined') return

    const W = () => canvas.parentElement.offsetWidth || 500
    const H = 460

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(W(), H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, W() / H, 0.1, 100)
    camera.position.set(1.8, 3.2, 7)
    camera.lookAt(0, 1.2, 0)

    // Lighting
    scene.add(new THREE.AmbientLight(0x1a2540, 2))
    const blueLight = new THREE.PointLight(0x3f77b4, 4, 18)
    blueLight.position.set(4, 5, 5)
    scene.add(blueLight)
    const purpleLight = new THREE.PointLight(0x818cf8, 2.5, 14)
    purpleLight.position.set(-4, 3, 2)
    scene.add(purpleLight)

    // ── LAPTOP GROUP ──
    const laptopGroup = new THREE.Group()
    scene.add(laptopGroup)

    const metalDark  = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.75, roughness: 0.35 })
    const keyboardMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 })

    // Base body
    const base = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.14, 2.5), metalDark)
    laptopGroup.add(base)

    // Keyboard surface — slightly above base to avoid z-fighting
    const kb = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.025, 1.7), keyboardMat)
    kb.position.set(0, 0.083, 0.1)
    laptopGroup.add(kb)

    // Trackpad — own distinct Y level, no overlap with keyboard
    const tp = new THREE.Mesh(
        new THREE.BoxGeometry(1.1, 0.025, 0.7),
        new THREE.MeshStandardMaterial({ color: 0x172032, metalness: 0.5, roughness: 0.6 })
    )
    tp.position.set(0, 0.083, 0.92)
    laptopGroup.add(tp)

    // Key rows (4 × 11 small boxes)
    const keyMat = new THREE.MeshStandardMaterial({ color: 0x243044, roughness: 0.85 })
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 11; c++) {
            const key = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 0.22), keyMat)
            key.position.set(-1.45 + c * 0.295, 0.09, -0.55 + r * 0.32)
            laptopGroup.add(key)
        }
    }

    // ── SCREEN PIVOT ──
    const screenPivot = new THREE.Group()
    screenPivot.position.set(0, 0.07, -1.25)
    screenPivot.rotation.x = 0.08
    laptopGroup.add(screenPivot)

    // Screen housing — use .position.set(), never Object.assign
    const screenHousing = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.5, 0.09), metalDark)
    screenHousing.position.set(0, 1.25, 0)
    screenPivot.add(screenHousing)

    // ── CODE EDITOR TEXTURE ──
    const dc = document.createElement('canvas')
    dc.width = 720; dc.height = 460
    const ctx = dc.getContext('2d')

    ctx.fillStyle = '#060b14'
    ctx.fillRect(0, 0, 720, 460)
    ctx.fillStyle = '#0d1b2a'
    ctx.fillRect(0, 0, 720, 36)
    ;[[16,'#ff5f57'],[38,'#febc2e'],[60,'#28c840']].forEach(function(pair) {
        ctx.fillStyle = pair[1]
        ctx.beginPath(); ctx.arc(pair[0], 18, 7, 0, Math.PI * 2); ctx.fill()
    })
    ctx.fillStyle = '#475569'; ctx.font = '13px monospace'
    ctx.fillText('portfolio.py  \u00d7', 290, 23)
    ctx.fillStyle = '#0a1220'
    ctx.fillRect(0, 36, 42, 424)

    ctx.font = '15px "Courier New",monospace'
    var codeLines = [
        [['#475569','1 '],['#818cf8','class '],['#f1f5f9','DataEngineer:']],
        [['#475569','2 '],['#3f77b4','  def '],['#34d399','__init__'],['#94a3b8','(self):']],
        [['#475569','3 '],['#94a3b8','    self.name'],['#3f77b4',' = '],['#34d399','"Hamza"']],
        [['#475569','4 '],['#94a3b8','    self.role'],['#3f77b4',' = '],['#34d399','"ML Engineer"']],
        [['#475569','5 '],['#94a3b8','    self.stack'],['#3f77b4',' = '],['#34d399','["Python","dbt","GCP"]']],
        [['#475569','6 ']],
        [['#475569','7 '],['#3f77b4','  def '],['#34d399','build_pipeline'],['#94a3b8','(self):']],
        [['#475569','8 '],['#818cf8','    return '],['#f1f5f9','self.'],['#34d399','magic()'],['#f1f5f9',' \u2728']],
        [['#475569','9 '],['#3f77b4','\u258b']],
    ]
    codeLines.forEach(function(parts, row) {
        var x = 8, y = 62 + row * 28
        ctx.fillStyle = parts[0][0]; ctx.fillText(parts[0][1], x, y)
        x = 50
        for (var i = 1; i < parts.length; i++) {
            ctx.fillStyle = parts[i][0]; ctx.fillText(parts[i][1], x, y)
            x += ctx.measureText(parts[i][1]).width
        }
    })

    var screenTex = new THREE.CanvasTexture(dc)
    var screenDisplay = new THREE.Mesh(
        new THREE.PlaneGeometry(3.48, 2.18),
        new THREE.MeshBasicMaterial({ map: screenTex, side: THREE.DoubleSide })
    )
    screenDisplay.position.set(0, 1.25, 0.051)
    screenPivot.add(screenDisplay)

    var glowEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(3.8, 2.5, 0.09)),
        new THREE.LineBasicMaterial({ color: 0x3f77b4, transparent: true, opacity: 0.5 })
    )
    glowEdges.position.set(0, 1.25, 0)
    screenPivot.add(glowEdges)

    // ── FLOATING CODE SYMBOLS ──
    function makeSymbol(text, color) {
        var sc = document.createElement('canvas')
        sc.width = 160; sc.height = 80
        var scx = sc.getContext('2d')
        scx.font = 'bold 34px "Courier New",monospace'
        scx.fillStyle = color
        scx.textAlign = 'center'; scx.textBaseline = 'middle'
        scx.fillText(text, 80, 40)
        var sp = new THREE.Sprite(new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(sc), transparent: true, opacity: 0.8
        }))
        sp.scale.set(1.1, 0.55, 1)
        return sp
    }

    var floatersData = [
        { text: '{ }',  color: '#3f77b4', px: -3.2, py: 2.4,  pz: -0.5, bob: 0.9 },
        { text: '</>',  color: '#818cf8', px:  3.0, py: 1.9,  pz:  0.5, bob: 0.7 },
        { text: '( )',  color: '#3f77b4', px: -2.6, py: -0.4, pz:  1.3, bob: 1.1 },
        { text: '[ ]',  color: '#818cf8', px:  0.4, py: 3.2,  pz: -1.2, bob: 0.8 },
        { text: '=>',   color: '#3f77b4', px:  3.2, py: -0.6, pz: -0.8, bob: 1.0 },
        { text: '//',   color: '#475569', px: -1.8, py: 1.2,  pz:  1.9, bob: 0.6 },
    ]
    var floaterObjs = floatersData.map(function(f) {
        var sp = makeSymbol(f.text, f.color)
        sp.position.set(f.px, f.py, f.pz)
        scene.add(sp)
        return { sp: sp, baseY: f.py, bob: f.bob }
    })

    // ── PARTICLES ──
    var N = 55, pArr = new Float32Array(N * 3)
    for (var i = 0; i < N; i++) {
        pArr[i*3]   = (Math.random() - 0.5) * 13
        pArr[i*3+1] = (Math.random() - 0.5) * 9
        pArr[i*3+2] = (Math.random() - 0.5) * 7
    }
    var pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pArr, 3))
    var pts = new THREE.Points(pGeo, new THREE.PointsMaterial({
        color: 0x3f77b4, size: 0.06, transparent: true, opacity: 0.35
    }))
    scene.add(pts)

    // ── MOUSE PARALLAX ──
    var mx = 0, my = 0
    window.addEventListener('mousemove', function(e) {
        mx = (e.clientX / window.innerWidth  - 0.5)
        my = (e.clientY / window.innerHeight - 0.5)
    })

    // ── ANIMATION LOOP ──
    var t = 0
    function animateAbout() {
        requestAnimationFrame(animateAbout)
        t += 0.012
        laptopGroup.rotation.y = Math.sin(t * 0.25) * 0.15 + mx * 0.25
        laptopGroup.rotation.x = -0.06 - my * 0.08
        floaterObjs.forEach(function(f, idx) {
            f.sp.position.y = f.baseY + Math.sin(t * f.bob + idx * 1.3) * 0.22
        })
        pts.rotation.y += 0.0007
        renderer.render(scene, camera)
    }
    animateAbout()

    window.addEventListener('resize', function() {
        camera.aspect = W() / H
        camera.updateProjectionMatrix()
        renderer.setSize(W(), H)
    })
}

/*==================== QUALIFICATION SCROLL REVEAL ====================*/
function initQualReveal() {
    const items = document.querySelectorAll('.qualification__data')
    if (!items.length) return

    const reveal = (item, delay) => {
        setTimeout(() => item.classList.add('q-visible'), delay)
    }

    const obs = new IntersectionObserver(entries => {
        let batch = 0
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reveal(entry.target, batch * 100)
                obs.unobserve(entry.target)
                batch++
            }
        })
    }, { threshold: 0.15 })

    items.forEach(item => obs.observe(item))

    // When switching tabs, reveal items in the newly-visible tab
    document.querySelectorAll('[data-target]').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)
            if (!target) return
            target.querySelectorAll('.qualification__data:not(.q-visible)').forEach((item, i) => {
                reveal(item, i * 100)
            })
        })
    })
}

/*==================== CUSTOM CURSOR ====================*/
function initCursor() {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let ringX = 0, ringY = 0
    let dotX  = 0, dotY  = 0

    document.addEventListener('mousemove', e => {
        dotX = e.clientX; dotY = e.clientY
        dot.style.left  = dotX + 'px'
        dot.style.top   = dotY + 'px'
    })

    // Ring follows with smooth lag via rAF
    function animRing() {
        ringX += (dotX - ringX) * 0.12
        ringY += (dotY - ringY) * 0.12
        ring.style.left = ringX + 'px'
        ring.style.top  = ringY + 'px'
        requestAnimationFrame(animRing)
    }
    animRing()

    // Hover effect on interactive elements
    const targets = 'a, button, [data-target], .projects-filter__btn, .nav__toggle, .change-theme'
    document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('is-hovering'); ring.classList.add('is-hovering') })
        el.addEventListener('mouseleave', () => { dot.classList.remove('is-hovering'); ring.classList.remove('is-hovering') })
    })

    // Hide when leaving window
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1' })
}

/*==================== INIT ====================*/
initHeroCanvas()
initAboutCanvas()
initHorizontalScroll()
fetchMediumPosts()
initQualReveal()
initCursor()
