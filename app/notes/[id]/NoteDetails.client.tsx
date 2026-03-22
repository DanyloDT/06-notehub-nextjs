'use client';

import NoteDetailsClient from '@/components/NoteDetailsClient/NoteDetailsClient';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const NoteDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <p>Loading, please wait...</p>}
      {error || !note ? (
        <p>Something went wrong.</p>
      ) : (
        <NoteDetailsClient note={note} />
      )}
    </>
  );
};

export default NoteDetails;
