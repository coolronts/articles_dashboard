export function imageEncode(blob) {
    return new Promise((onSuccess, onError) => {
        try {
            const reader = new FileReader();
            reader.onload = function() { onSuccess(this.result) };
            reader.readAsDataURL(blob);
        } catch (e) {
            onError(e);
        }
    })
}