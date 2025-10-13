// Gallery Thumbnails
const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('currentImage');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
    });
});

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Modals
function openModal(modal){ modal.style.display='flex'; }
function closeModal(modal){ modal.style.display='none'; }

const sizeChartBtn = document.getElementById('sizeChartBtn');
const compareColorsBtn = document.getElementById('compareColorsBtn');
const sizeChartModal = document.getElementById('sizeChartModal');
const compareColorsModal = document.getElementById('compareColorsModal');
const closeBtns = document.querySelectorAll('.modal .close');

sizeChartBtn.onclick = () => openModal(sizeChartModal);
compareColorsBtn.onclick = () => openModal(compareColorsModal);
closeBtns.forEach(btn => btn.onclick = () => closeModal(btn.closest('.modal')));
window.onclick = e => { if(e.target.classList.contains('modal')) closeModal(e.target); }
window.onkeydown = e => { if(e.key === "Escape"){ closeModal(sizeChartModal); closeModal(compareColorsModal); } }

// Color swatches selection
const colorSwatches = document.querySelectorAll('.color-swatch');
colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
    });
});
