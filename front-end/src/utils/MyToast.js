export default function (toast, status, message) {
  const toastStatus = status === 201 ? 'success' : status === 400 ? 'warning' : 'error'

  toast({
    title: message,
    status: toastStatus,
    duration: 3000,
    isClosable: true,
    onCloseComplete: toastStatus === 'success' ? window.location.reload : null
  })
}
