export default function ({ store, redirect }) {
    if (store.admin === 'false') {
      return redirect('/login')
    }
}