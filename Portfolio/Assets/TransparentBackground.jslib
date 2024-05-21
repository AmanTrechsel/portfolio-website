var LibraryGLClear = {
    glClear: function(mask) {
        if (mask == 0x00004000) { // Checking for alpha channel clearing
            var v = GLctx.getParameter(GLctx.COLOR_WRITEMASK);
            if (!v[0] && !v[1] && !v[2] && v[3]) { // Only alpha write is enabled
                return; // Skip clearing alpha
            }
        }
        GLctx.clear(mask);
    }
};
mergeInto(LibraryManager.library, LibraryGLClear);