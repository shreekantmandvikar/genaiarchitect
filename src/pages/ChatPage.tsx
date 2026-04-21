import ArchitectChat from '../components/ArchitectChat';

// Chat is full-viewport — hide the footer on this page via a wrapper
export default function ChatPage() {
  return (
    <div className="-mb-0">
      <ArchitectChat />
    </div>
  );
}
