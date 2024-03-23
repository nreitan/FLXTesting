
<script>
let targetElement = document.querySelector('#information li a[title="Youth Programming"] .label');
console.log(targetElement)
console.log("Step 1 Complete")
let copyContent = targetElement.cloneNode(true);
console.log("Copied")
copiedContent.removeAttribute('class');
copiedContent.removeAttribute('role');
console.log("Success");
console.log(copiedContent);
</script>
