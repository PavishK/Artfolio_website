const galleryHeights = [ 520, 460, 640, 480, 440, 620, 460, 440, 540, 420 ]

export const galleryHeight = ( data ) => {
    return data.map(( v, i ) => ({
        ...v,
        height:galleryHeights[i],
    }));
}

export const description = "An artist who brings emotion to paper through detailed hand-drawn sketches, each crafted with care and framed to create timeless, heartfelt pieces. Her work captures simple beauty, natural warmth, and personal expression, turning every drawing into art that inspires and brightens any space.";