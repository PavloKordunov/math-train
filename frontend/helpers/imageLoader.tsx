export function encodeImageFileAsURL(event: React.ChangeEvent<HTMLInputElement>, setBase64: any, setObject: any) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = function () {
      const base64String = reader.result as string;
      setBase64(base64String);
      setObject((prev: any) => ({
        ...prev,
        image: base64String,
    }));
      console.log('RESULT:', base64String);
    };
    reader.readAsDataURL(file);
}